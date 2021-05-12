import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Nav from './Nav';
import Footer from './Footer'
import Dashboard from './Dashboard';
import Features from './Features'

function App() {
    return (
        <div className="App">
        <Router>
                <Switch>
                    <Route exact path="/">
                        <Nav />
                        <Home />
                        <Footer />
                    </Route>
                    <Route exact path="/Signup">
                        <Nav />
                        <Signup />
                        <Footer />
                    </Route>
                     <Route exact path="/Login">
                        <Nav />
                        <Login />
                        <Footer />
                    </Route>
                    <Route exact path="/Dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/Features">
                        <Nav />
                        <Features />
                        <Footer />
                    </Route>
                </Switch>
        </Router>
        </div>
        

    );
}

export default App;