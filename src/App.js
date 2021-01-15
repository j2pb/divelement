import React, { Component, Fragment } from 'react';
//router
import {
    Route,
    Router
} from 'react-router-dom'
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar'
import './App.scss';
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Navbar />
                    <div className="container">
                        <Route render={({ location }) => (
                            <Fragment key={location.pathname}>
                                <AppRoutes />
                            </Fragment>
                        )} />
                    </div>
                </div>
            </Router >
        );
    }
}
export default App;