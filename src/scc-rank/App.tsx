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
    <>
    <button onClick={backYear}>{"<-"}</button>
    {year}
    <button onClick={forwardYear}>{"->"}</button>
    <RankingView year={year} />
    </>
  )
}

export default App
