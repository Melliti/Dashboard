import React, { Component, Fragment } from 'react';
import Login from './Login'
import Register from './Register'


class Auth extends Component {
    render() {
        return (
            <Fragment>
                <div className="root-container">
                    <div className="box-container">
                        <div className="controller">
                        Login
                        </div>
                        <div className="controller">
                        Register
                        </div>
                        <Login />
                        <Register />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Auth