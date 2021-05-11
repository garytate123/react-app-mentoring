import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './Homepage';
import Signup from './Signup-page';
import Login from './Login-page';
import Nav from './Nav';

function App() {
    return (
        <Router>
          <Nav />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/Signup">
                        <Signup />
                    </Route>
                     <Route exact path="/Login">
                        <Login />
                    </Route>
                </Switch>
        </Router>
        

    );
}

export default App;