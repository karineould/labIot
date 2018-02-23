import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './login/Login';
import User from './contents/Users';
import Accueil from './contents/Accueil';
import Materiels from "./contents/Materiels";
import Main from "./Main";

export default class App extends React.Component {

    render() {

        const isLoggedIn = false;

        if (!isLoggedIn) {
            return (
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        {/*<Route path="/register" component={Register} />*/}
                        {/*<Route path="/forgot" component={ForgotPassword} />*/}
                        <Redirect to="/login" />
                    </Switch>
                </Router>
            );
        }

        return (
            <Router>
                <Main>
                    <Switch>
                        <Route exact path='/' component={Accueil} />
                        <Route path='/materiels' component={Materiels} />
                        <Route path='/users' component={User} />
                        <Redirect from="/login" to="/" />
                    </Switch>
                </Main>
            </Router>
        );
    }

}
