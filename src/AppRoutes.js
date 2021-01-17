import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const History = lazy(() => import('./components/Branches'));
const Profile = lazy(() => import('./components/Profile'));
const Readme = lazy(() => import('./components/Readme'));
const Error404 = lazy(() => import('./components/Error404'));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/" component={History} />
          <Route exact path="/history" component={History} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/readme" component={Readme} />
          <Route path="/404" component={Error404} />
          <Redirect to={"/404"} />
        </Switch>
      </Suspense >
    );
  }
}

export default AppRoutes;