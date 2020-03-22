import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './project';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/project" component={Projects} />
        </Switch>
   </Router>
)

export default Main;