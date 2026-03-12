import { useEffect, useState } from "react"

interface RankingViewProps {
    year: number
}
interface RankingsData {
    rank: number,
    name: string,
    school: string,
    elo: number,
    bestWin: string,
    bestWinElo: number,
    GCs: number
}


function RankingView({ year }: RankingViewProps) {
    const [rankings, setRankings] = useState<RankingsData[] | null>(null);
    useEffect(() => {
        console.log(year);
        fetch(`https://raw.githubusercontent.com/wnuspl/showchoir-rankings/refs/heads/main/rankings/rankings-${year}.json`)
            .then(response => response.json())
            .then(data => setRankings(data));
    }, [year])

    if (!rankings) {
        return null;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Placement</th>
                    <th>Choir Name</th>
                    <th>School</th>
                    <th>Elo</th>
                </tr>
            </thead>
            <tbody>
                {rankings.map((choir) => (
                    <tr key={choir.rank}>
                        <td>{choir.rank}</td>
                        <td>{choir.name}</td>
                        <td>{choir.school}</td>
                        <td>{choir.elo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
    
export default RankingView;