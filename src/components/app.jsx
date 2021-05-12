import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Features from './Features';
// Components
import Nav from './Nav';
import Footer from './Footer'
// Dashboards
import Mentor_Dash from './Dashboard/Mentor_Dashboard/Mentor_Dash';
import Org_Dash from './Dashboard/Org_Dashboard/Org_Dash';
import Mentee_Dash from './Dashboard/Mentee_Dashboard/Mentee_Dash';



function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Nav />
                        <Home />
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
                    <Route exact path="/Features">
                        <Nav />
                        <Features />
                        <Footer />
                    </Route>
                    <Route exact path="/Org_Dash">
                        <Org_Dash />
                    </Route>
                    <Route exact path="/Mentor_Dash">
                        <Mentor_Dash />
                    </Route>
                    <Route exact path="/Mentee_Dash">
                        <Mentee_Dash />
                    </Route>
                </Switch>
            </Router>
        </div>
        

    );
}

export default App;