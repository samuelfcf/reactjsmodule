import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';
import NotFoundScreen from './screens/notFound';

const Routes = () => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PlanetsScreen} />
        <Route exact path="/planet/:id" component={PlanetScreen} />
        <Route exact path="*" component={NotFoundScreen} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;