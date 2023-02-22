import { useEffect, useState } from "react";
import { DriverStanding, fetchAllDriverInformation } from "../../api/Drivers";
import { ConstructorStanding, fetchConstructorStanding } from "../../api/Constructors";
import ConstructorStandingTable from "../layout/table/ConstructorStanding";
import DriverStandingTable from "../layout/table/DriverStanding";
import ToggleSwitchBar from "../layout/navigation/ToggleSwitchBar";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function SeasonStanding() {
    const [drivers, setDrivers] = useState<DriverStanding[]>([]);
    const [constructors, setConstructors] = useState<ConstructorStanding[]>([]);
    const [showTable, setShowTable] = useState(true);
    const [activeTab, setActiveTab] = useState("Driver");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const getDrivers = async () => {
            try {
                const driversData = await fetchAllDriverInformation('2019'); //TODO match year with selected year instead
                const constructorsData = await fetchConstructorStanding('2019');
                setDrivers(driversData);
                setConstructors(constructorsData);
                setIsLoaded(true);
            }
            catch (ex)
            {
                console.log(ex);
            }
        }
        
        getDrivers();
    }, []);

    drivers.sort((a,b) => parseInt(a.position) > parseInt(b.position) ? 1 : -1);
    constructors.sort((a,b) => parseInt(a.position) > parseInt(b.position) ? 1 : -1);

    const handleSwitchTable = () => {
        setShowTable((show) => !show);
    }

    const handleOptionChange = (option: string) => {
        setActiveTab(option);
    }

    return (
        <div className="mt-10">
            <div className="w-1/2 mx-auto text-left mb-2 flex items-center justify-start xs:flex xs:items-center xs:justify-center sm:flex sm:items-center sm:justify-center md:justify-center">
                {/* TODO: change the year to dynamic year */}
                <span className="text-5xl font-semibold mr-4 xs:text-4xl">2019</span> <span className="text-2xl font-semibold uppercase xs:text-lg">season</span>
            </div>
            <div>
                <ToggleSwitchBar onOptionChange={handleOptionChange} activeTab={activeTab}/>
                {
                    <div className="flex justify-center mt-10">
                        { isLoaded ? activeTab === "Driver" ? (
                            <DriverStandingTable drivers={drivers}/>
                        ) : (
                            <ConstructorStandingTable constructors={constructors} />
                        ) : <Skeleton count={15} height={25} width={1000} className="block bg-gray-100"/>  }

                    </div>
                }
            </div>
        </div>
    )
}

export default SeasonStanding;