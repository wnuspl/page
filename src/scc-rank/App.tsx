import RankingView from "./RankingView"
import { useState } from "react"



function App() {
  const [year, setYear] = useState<number>(2026);

  const backYear = () => {
    setYear(year-1);
  }
  const forwardYear = () => {
    setYear(year+1);
  }
  return (
    <div className="p-4">
    <button onClick={backYear} className="text-xl hover:text-blue-600 p-2">←</button>
    {year}
    <button onClick={forwardYear} className="text-xl hover:text-blue-600 p-2">→</button>
    <RankingView year={year} />
    </div>
  )
}

export default App
