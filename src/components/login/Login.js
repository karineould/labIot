import React from 'react';

export default class Login extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" />
                                        Remember Password
                                    </label>
                                </div>
                            </div>
                            <a className="btn btn-primary btn-block" href="">Login</a>
                        </form>
                        <div className="text-center">
                            <a className="d-block small mt-3" href="">Register an Account</a>
                            <a className="d-block small" href="">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

