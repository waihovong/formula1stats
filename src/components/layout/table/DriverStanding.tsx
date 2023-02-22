import { DriverStanding } from "../../../api/Drivers";

type DriverStandingTableProps = {
    drivers: DriverStanding[];
};

function DriverStandingTable({ drivers } : DriverStandingTableProps) {
    return (
        //todo add skeleton loading to data
        <table className="w-1/2 border-collapse xs:w-full sm:w-11/12 md:w-11/12 lg:w-1/2">
            <thead>
                <tr className="h-10">
                    <th className="text-center text-gray-400 text-sm "></th>
                    <th className="text-xs text-gray-300">#</th>
                    <th className="text-left uppercase font-normal text-gray-400 text-sm xs:text-xs">Driver</th>
                    <th className="uppercase font-normal text-gray-400 text-sm text-left xs:hidden">Car</th>
                    <th className="uppercase font-normal text-gray-400 text-sm text-left xs:text-xs">Points</th>
                </tr>
            </thead>
            <tbody>
                {drivers.map((driver: DriverStanding, id: any) => (
                    <tr key={driver.driverId + "-" + id} className=" even:bg-slate-100 h-10">
                        <td className="text-center text-sm">{driver.position}</td>
                        <td className="text-xs">{driver.Driver.permanentNumber}</td>
                        <td className="text-left text-sm">{driver.Driver.givenName} {driver.Driver.familyName} <td className="hidden xs:block xs:text-xs">{driver.team}</td></td>
                        <td className="text-left text-sm xs:hidden">{driver.team}</td>
                        <td className="text-left text-sm">{driver.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DriverStandingTable;