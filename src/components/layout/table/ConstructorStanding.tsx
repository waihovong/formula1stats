import { ConstructorStanding } from "../../../api/Constructors";
import classNames from "classnames";
type ConstructorStandingTableProps = {
    constructors: ConstructorStanding[];
}

function ConstructorStandingTable({ constructors } : ConstructorStandingTableProps) {

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

    console.log(constructors)

    return (
        <table className="w-1/2 border-collapse xs:w-full sm:w-11/12 md:w-11/12 lg:w-1/2">
            <thead>
                <tr className="h-10">
                    <th className="text-center text-gray-400 text-sm "></th>
                    <th className="uppercase font-normal text-gray-400 text-sm text-left xs:text-xs">Team</th>
                    <th className="uppercase font-normal text-gray-400 text-sm text-center xs:text-xs">Points</th>
                    <th className="uppercase font-normal text-gray-400 text-sm text-center xs:text-xs">Season wins</th>
                </tr>
            </thead>
            <tbody>
                {constructors.map((team: ConstructorStanding, id: any) => (
                    <tr key={team.Constructor.name + "-" + id} className=" even:bg-slate-100 h-10">
                        <td className="text-center text-sm">{team.position}</td>
                        <td className="text-sm text-left"><span className={classNames(teamColors[team.Constructor.constructorId], "text-sm h-[15px] w-1 mr-2 inline-block align-middle")}></span>{team.Constructor.name}</td>
                        <td className="text-sm text-center">{team.points}</td>
                        <td className="text-center text-sm">{team.wins}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ConstructorStandingTable;