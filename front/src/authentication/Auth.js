import React, { Component, Fragment } from 'react';
import Login from './Login'
import Register from './Register'


class Auth extends Component {

    constructor(props) {
        super (props);
        this.state = {isLoginOpen: true, isRegisterOpen: false};
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }

    showRegisterBox() {
        this.setState({isLoginOpen: false, isRegisterOpen: true});
    }

    render() {
        return (
            <Fragment>

                <ul className="nav justify-content-center">

                    <li className="nav-item">
                        <button className="btn btn-link" onClick={this.showLoginBox.bind(this)}>Login</button>
                    </li>
                    
                    <li className="nav-item">
                        <button className="btn btn-link" onClick={this.showRegisterBox.bind(this)}>Register</button>
                    </li>

                </ul>

                {this.state.isLoginOpen && <Login />}
                {this.state.isRegisterOpen && <Register />}

            </Fragment>
        );
    }
}

export default Auth