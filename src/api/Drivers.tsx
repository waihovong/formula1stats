export interface Driver {
    givenName: string;
    familyName: string;
    nationality?: string;
    permanentNumber: number;
    driverId: string;
    team?: string;
  }
  
  export interface Constructor {
    constructorId: string;
    name: string;
    nationality: string;
  }
  
  export interface DriverStanding {
	driverId: string;
	position: string;
	points: string;
	wins: string;
	team: string;
	Driver: {
	  driverId: string;
	  permanentNumber: string;
	  code: string;
	  url: string;
	  givenName: string;
	  familyName: string;
	  dateOfBirth: string;
	  nationality: string;
	  team?: string;
	};
	Constructors: {
	  constructorId: string;
	  url: string;
	  name: string;
	  nationality: string;
	}[];
  }
// Caching results
const CACHE_TIMEOUT = 1000 * 60 * 60;

let driverListCache: DriverStanding[] = [];
let driverListCacheTime: number = 0;

let driverInformationCache: DriverStanding[] = [];
let driverInformationCacheTime: number = 0;

export const fetchAllDriverInformation = async (year: string): Promise<DriverStanding[]> => {
	if(Date.now() - driverInformationCacheTime < CACHE_TIMEOUT)
    {
        return driverInformationCache;
    }
	try {
		const driverResponse = await fetchListOfDrivers(year);
		const mapDriver = await Promise.all(driverResponse.map(async (driver: DriverStanding) => {
			const driverStanding = await fetchDriverStanding(year, driver.driverId);
			const driverTeam = driverStanding.length > 0 ? driverStanding[0].Constructors.map((constructor: Constructor) => constructor.name).join(", ") : "Unknown";
			return {
				...driver.Driver,
				...driverStanding[0],
				team: driverTeam
			}
		 }));

		driverInformationCache = mapDriver;
		driverInformationCacheTime = Date.now();
		return mapDriver;
	}
	catch (error) {
		console.log(error);
		return [];
	}
}

export const fetchListOfDrivers = async (year: string): Promise<DriverStanding[]> => {
    if(Date.now() - driverListCacheTime < CACHE_TIMEOUT)
    {
        return driverListCache;
    }
    try {
        const driverResponse = await fetch(`http://ergast.com/api/f1/${year}/drivers.json`)
        const driverData  = await driverResponse.json();
        const driverList = driverData.MRData.DriverTable.Drivers;
          
		// Mapping teams with drivers
        const driverWithTeams = await Promise.all(
            driverList.map(async (driver: Driver) => {
              const driverStandings = await fetchDriverStanding(year, driver.driverId);    
			  const teams = driverStandings.length > 0 ? driverStandings[0].Constructors.map((constructor: Constructor) => constructor.name).join(" ") : ["Unknown"];   
              return { ...driver, team: teams };
            })
          );

        // Cache results to result load time of all APIs for mapping
        driverListCache = driverList;
        driverListCacheTime = Date.now();

        return driverWithTeams;
    }
    catch (error) {
        console.log(error);

        return [];
    }
}

// Fetches the drivers standings from the selected year
// year: selected year
// id: driverId from Driver
export const fetchDriverStanding = async (year: string, driverId: string): Promise<DriverStanding[]> => {
    try {
        const driverStandingResponse = await fetch(`http://ergast.com/api/f1/${year}/drivers/${driverId}/driverStandings.json`);
        const driverStandingData = await driverStandingResponse.json();
        const driverStandings = driverStandingData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        return driverStandings as DriverStanding[];
    }
    catch (error) {
        console.log(error);
        return [];
    }
}