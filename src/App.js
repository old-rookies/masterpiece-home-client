import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import logo from "./logo.svg";
import "./App.css";

import Nav from "./common/nav/Nav";

import Service from './Service/Service';
import Team from './Team/Team';
import Press from './Press/Press';
import Contact from './Contact/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
            </div>
            <Route exact path="/" component={Service} />
            <Route exact path="/service" component={Service} />
            <Route path="/team" component={Team} />
            <Route path="/press" component={Press} />
            <Route path="/contact" component={Contact} />
        </Router>
    );
}

export default App;
