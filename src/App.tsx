import { Route, Routes, Link } from "react-router-dom";
import MainApp from "./main/App.tsx"
import SccApp from "./scc-rank/App.tsx"

function App() {
    return (
        <>
            <div className="p-4">
                <Link to="/" className="font-bold text-xl hover:underline">
                    Will Nuspl
                </Link>
            </div>  

            <hr />

            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="/scc" element={<SccApp />} />
            </Routes>
        </>
    )
}



export default App;