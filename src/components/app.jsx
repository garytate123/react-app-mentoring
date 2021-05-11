import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './Homepage';
// import Signup from './Signup/Signup-page';

function App() {
    return (
        <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>

    );
}

export default App;