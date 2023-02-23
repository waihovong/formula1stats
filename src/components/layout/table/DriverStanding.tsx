import { DriverStanding } from "../../../api/Drivers";
import classNames from "classnames";

type DriverStandingTableProps = {
    drivers: DriverStanding[];
};



function DriverStandingTable({ drivers } : DriverStandingTableProps) {

    const teamColors: {[key: string]: string} = {
        mercedes: "bg-[#6CD3BF]",
        red_bull: "bg-[#3671C6]",
        ferrari: "bg-[#F91536]",
        mclaren: "bg-[#F58020]",
        renault: "bg-[#FFF500]",
        alpine: "bg-[#2293D1]",
        racing_point: "bg-[#F596C8]",
        aston_martin: "bg-[#2D826D]",
        alfa: "bg-[#B12039]",
        toro_rosso: "bg-[#469BFF]",
        alphatauri: "bg-[#4E7C9B]",
        haas: "bg-[#B6BABD]",
        williams: "bg-[#37BEDD]",
      };

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
                        <td className="text-xs text-center">{driver.Driver.permanentNumber}</td>
                        <td className="text-left text-sm"><span className={classNames(teamColors[driver.Constructors[0].constructorId], "text-sm h-[15px] w-1 mr-2 inline-block align-middle")}></span><span className="align-middle">{driver.Driver.givenName}</span> <span className="uppercase font-semibold align-middle">{driver.Driver.familyName}</span> <td className="hidden xs:block xs:text-xs">{driver.team}</td></td>
                        <td className="text-left text-sm xs:hidden">{driver.team}</td>
                        <td className="text-left text-sm">{driver.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DriverStandingTable;