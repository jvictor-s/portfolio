import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";


function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;