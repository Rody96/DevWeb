import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PointsOfInterest from './PointsofInterest'


const Main = () => (
        <Switch>
            <Route exact path="/PointsOfInterest" component={PointsOfInterest} />
        </Switch>
)

export default Main;