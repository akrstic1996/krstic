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
                    <div className="logo">
                        <img src={logo} alt="Logo" className="logo"/>
                    </div>
                    <div className="home">
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="contact">
                        <Link to='/Contact'>Contact</Link>
                    </div>
                    <div className="about">
                        <Link to='/About'>About</Link>
                    </div>
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