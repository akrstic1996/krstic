import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from './About';
import './Nav.css';

function Nav() {
    return (<Router>
        <div >
            <nav>
                <ul className="flexyMeni">
                    <li className="one">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="two">
                        <Link to='/Contact'>Contact</Link>
                    </li>
                    <li className="three">
                        <Link to='/About'>About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/About" Component={About}/>
            </Routes>
        </div>
    </Router>);
}

export default Nav;