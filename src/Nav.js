import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import logo from './logo.webp';
import './Nav.css';

function Nav() {
    return (<Router>
        <div >
            <nav>
                <div className="navContainer">
                <ul className="flexyMeni">
                    <li className="logoList">
                        <img src={logo} alt="Logo" className="logo"/>
                    </li>
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
                </div>
            </nav>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/About" Component={About}/>
                <Route path="/Contact" Component={Contact}/>
            </Routes>
        </div>
    </Router>);
}

export default Nav;