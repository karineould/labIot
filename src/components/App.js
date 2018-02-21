import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
// import Login from './login/Login';
import User from './contents/Users';
import Accueil from './contents/Accueil';
import Materiels from "./contents/Materiels";

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Accueil} />
                    <Route path='/materiels' component={Materiels} />
                    <Route path='/users' component={User} />
                    <Redirect to='/'/>
                </Switch>

            </Router>
        );
    }

}
