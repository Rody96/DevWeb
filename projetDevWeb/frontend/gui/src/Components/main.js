import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingpage from './landingpage'
import PointsOfInterest from './PointsofInterest'
import parcoursPersos from './parcoursPersos'


const Main = () => (
        <Switch>
            <Route exact path="/landingpage" component={landingpage} />
            <Route exact path="/PointsOfInterest" component={PointsOfInterest} />
            <Route exact path="/parcoursPersos" component={parcoursPersos} />
        </Switch>
)

export default Main;