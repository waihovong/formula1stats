import { ConstructorStanding } from "../../../api/Constructors";

type ConstructorStandingTableProps = {
    constructors: ConstructorStanding[];
}

function ConstructorStandingTable({ constructors } : ConstructorStandingTableProps) {
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
                        <td className="text-sm text-left">{team.Constructor.name}</td>
                        <td className="text-sm text-center">{team.points}</td>
                        <td className="text-center text-sm">{team.wins}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ConstructorStandingTable;