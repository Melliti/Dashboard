import React, { Component } from 'react';
import logo from './dlogo.png'

class Nav extends Component {
    state = {

    }

    componentDidMount() {

    }

    render () {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                            <b>ASHBOARD</b>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav