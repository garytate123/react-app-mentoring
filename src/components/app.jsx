import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './Homepage';
import Signup from './Signup-page';
import Login from './Login-page';
import Nav from './Nav'

function App() {
    return (
        <Router>
        <Nav />
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/Signup" component={Signup}/>
                <Route exact path="/Login" component={Login}/>
             </Switch>
        </Router>

    );
}

export default App;