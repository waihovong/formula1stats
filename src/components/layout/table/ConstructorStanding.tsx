import { ConstructorStanding } from "../../../api/Constructors";

type ConstructorStandingTableProps = {
    constructors: ConstructorStanding[];
}

function ConstructorStandingTable({ constructors } : ConstructorStandingTableProps) {
    return (
        <table className="w-1/2 border-collapse">
            <thead>
                <tr className="h-10">
                    <th className="text-center text-gray-400 text-sm "></th>
                    <th className="uppercase font-normal text-gray-400 text-sm text-left">Team</th>
                    <th className="uppercase font-normal text-gray-400 text-sm text-center">Points</th>
                    <th className="uppercase font-normal text-gray-400 text-sm text-center">Season wins</th>
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