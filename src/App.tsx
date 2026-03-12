import { Route, Routes, Link } from "react-router-dom";
import MainApp from "./main/App.tsx"
import SccApp from "./scc-rank/App.tsx"
// import "./style.css"
function App() {
    return (
        <>
            <div className="font-courier font-bold text-xl p-4">
                <Link to="/">
                    <h1>Will Nuspl</h1>
                </Link>
            </div>  

            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="/scc" element={<SccApp />} />
            </Routes>
        </>
    )
}



export default App;