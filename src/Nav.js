import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import CCC from './CCC';
import KT from './KT';
import logo from './logo.WEB';
import './Nav.css';

function Nav() {
    return (<Router>
        <div >
            <nav>
                <div className="navContainer">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="logo"/>
                    </div>
                    <Link to='/'>
                    <div className="home">
                        Home
                    </div>
                    </Link>
                    <Link to='/Contact'>
                    <div className="contact">
                        Contact
                    </div>
                    </Link>
                    <Link to='/About'>
                    <div className="about">
                        About
                    </div>
                    </Link>
                    <Link to='/Carls'>
                    <div className="CCC">
                        Carl's Car Care
                    </div>
                    </Link>
                    <Link className="KT" to='/Kt'>
                    <div className="poop">
                        Krstic Trucking
                    </div>
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/About" Component={About}/>
                <Route path="/Contact" Component={Contact}/>
                <Route path="/Carls" Component={CCC}/>
                <Route path="/Kt" Component={KT}/>
            </Routes>
        </div>
    </Router>);
}

export default Nav;