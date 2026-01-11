import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import MainApp from "./MainApp.jsx";
import SingleTask from "./Tasks/SingleTask.jsx";

function Pages() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/app" element={<MainApp />} />
                    <Route path="/app/task/:id" element={<SingleTask />} />
                </Routes>
            </Router>
        </>
    )
}

export default Pages;