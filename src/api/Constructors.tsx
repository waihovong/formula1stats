export interface ConstructorStanding {
    position: string;
    points: string;
    wins: string;
    Constructor: {
        constructorId: string;
        name: string;
        nationality: string;
    }
}

const CACHE_TIMEOUT = 1000 * 60 * 60;

let constructorListCache: ConstructorStanding[] = [];
let constructorListCacheTime: number = 0;

export const fetchConstructorStanding = async (year: string): Promise<ConstructorStanding[]> => {
    if(Date.now() - constructorListCacheTime < CACHE_TIMEOUT)
    {
        return constructorListCache;
    }
    try {
        const constructorStandingResponse = await fetch(`http://ergast.com/api/f1/${year}/constructorStandings.json`);
        const constructorStandingData = await constructorStandingResponse.json();
        const constructorStandings = constructorStandingData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        console.log(constructorStandings);
        constructorListCache = constructorStandings;
        constructorListCacheTime = Date.now();
        return constructorStandings as ConstructorStanding[];
    }
    catch (error) {
        console.log(error);
        return [];
    }
}