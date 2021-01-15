import React, { Component, Fragment } from 'react';
//router
import {
    Route,
    Router
} from 'react-router-dom'
import AppRoutes from './AppRoutes';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <Route render={({ location }) => (
                    <Fragment key={location.pathname}>
                        <AppRoutes />
                    </Fragment>
                )} />
            </Router >
        );
    }
}
export default App;