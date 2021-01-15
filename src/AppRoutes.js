import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const History = lazy(() => import('./components/Branches'));
const Error404 = lazy(() => import('./components/Error404'));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/" component={History} />
          <Route exact path="/history" component={History} />
          <Route path="/404" component={Error404} />
          <Redirect to={"/404"} />
        </Switch>
      </Suspense >
    );
  }
}

export default AppRoutes;