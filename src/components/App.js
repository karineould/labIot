import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './login/Login';
import User from './contents/Users';
import Accueil from './contents/Accueil';
import Materiels from "./contents/Materiels";

export class App extends React.Component {

    render() {

        console.log(this.props.state.auth);
        if (!this.props.state.auth.isLogged) {
            return (
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Redirect to="/login" />
                    </Switch>
                </Router>
            );
        }

        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Accueil}/>
                    <Route path='/materiels' component={Materiels}/>
                    <Route path='/users' component={User}/>
                    <Redirect from="/login" to="/"/>
                </Switch>
            </Router>
        );
    }
}
//
// const PrivateRoute = ({ component: Component, authed, ...rest }) => (
//     <Route {...rest}
//            render={(props) => authed === true
//                ? <Component {...props} />
//                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//     />
// );

const mapStateToProps = function(state) {
    return {state};
};

export default connect(mapStateToProps)(App)
