import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";


function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;