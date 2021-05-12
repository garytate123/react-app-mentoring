import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import Signup from './Signup';
import Login from './Login-page';
import Nav from './Nav';
import Dashboard from './Dashboard';

function App() {
    return (
        <div className="App">
        <Router>
          <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Signup">
                        <Signup />
                    </Route>
                     <Route exact path="/Login">
                        <Login />
                    </Route>
                    <Route exact path="/Dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
        </Router>
        </div>
        

    );
}

export default App;