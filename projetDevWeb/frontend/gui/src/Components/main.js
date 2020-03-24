import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import PointsOfInterest from './PointsofInterest'


const Main = () => (
        <Switch>
            <Route exact path="/PointsOfInterest" component={PointsOfInterest} />
            <Route exact path="/landingpage" component={LandingPage} />
        </Switch>
)

export default Main;