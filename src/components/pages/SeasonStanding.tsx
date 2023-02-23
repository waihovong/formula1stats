import { useEffect, useState } from "react";
import { DriverStanding, fetchAllDriverInformation } from "../../api/Drivers";
import { ConstructorStanding, fetchConstructorStanding } from "../../api/Constructors";
import ConstructorStandingTable from "../layout/table/ConstructorStanding";
import DriverStandingTable from "../layout/table/DriverStanding";
import ToggleSwitchBar from "../layout/navigation/ToggleSwitchBar";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import SelectSeason from "../layout/navigation/SelectSeason";

function SeasonStanding() {
    const [drivers, setDrivers] = useState<DriverStanding[]>([]);
    const [constructors, setConstructors] = useState<ConstructorStanding[]>([]);
    const [activeTab, setActiveTab] = useState("Driver");
    const [isLoaded, setIsLoaded] = useState(false);
    const [season, setSeason] = useState("2022");
    

    const getSeasonStanding = async (year: string) => {
        try {
            const driversData = await fetchAllDriverInformation(season); //TODO match year with selected year instead
            const constructorsData = await fetchConstructorStanding(season);
            
            driversData.sort((a, b) => parseInt(a.position) > parseInt(b.position) ? 1 : -1);
            constructorsData.sort((a, b) => parseInt(a.position) > parseInt(b.position) ? 1 : -1);        
            setDrivers(driversData);
            setConstructors(constructorsData);
            setIsLoaded(true);
        }
        catch (ex)
        {
            console.log(ex);
        }
    }

    useEffect(() => {
        setIsLoaded(false)
        getSeasonStanding(season)
    }, [season])

    
    const handleOptionChange = (option: string) => {
        setActiveTab(option);
    }

    const handleSeasonChange = (selectedSeason: string) => {
        setSeason(selectedSeason);
      };

    return (
        <div className="mt-10 mb-10">
            <div className="w-1/2 mx-auto text-left mb-2 flex items-center justify-start xs:flex xs:items-center xs:justify-center sm:flex sm:items-center sm:justify-center md:justify-center">
                {/* TODO: change the year to dynamic year */}
                <SelectSeason onSelectSeason={handleSeasonChange}/>
                <span className="text-5xl font-semibold mr-4 xs:text-4xl">{season}</span> <span className="text-2xl font-semibold uppercase xs:text-lg">season</span>
            </div>
            <div>
                <ToggleSwitchBar onOptionChange={handleOptionChange} activeTab={activeTab}/>
                {
                    <div className="flex justify-center mt-10">
                        { isLoaded ? activeTab === "Driver" ? (
                            <DriverStandingTable drivers={drivers}/>
                        ) : (
                            <ConstructorStandingTable constructors={constructors} />
                        ) : (
                            <Skeleton count={15} height={25} width={1000} className="block bg-gray-100"/>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default SeasonStanding;