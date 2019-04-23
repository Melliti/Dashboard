import React, { Component } from 'react';


class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    submitRegister(e) {

    }

    render() {
        return (
        <div className="container">
            <div className="row">

                <div className="col-md-12">

                    <div className="row">
                        <div className="col-md-6 mx-auto">
                        
                            <div className="card rounded-0">
                                <div className="card-header">
                                    <h3 className="mb-0">Inscription</h3>
                                </div>

                                <div className="card-body">

                                    <label htmlFor="username">Nom d'utilisateur</label>
                                    <input className="form-control form-control-lg rounded-0" type="text" name="username" placeholder="Username" />

                                    <label htmlFor="email">Email</label>
                                    <input className="form-control form-control-lg rounded-0" type="text" name="username" placeholder="Email" />

                                    <label htmlFor="password">Mot de passe</label>
                                    <input className="form-control form-control-lg rounded-0" type="password" name="password" placeholder="Mot de passe" />

                                    <label htmlFor="password confirm">Confirmer mot de passe</label>
                                    <input className="form-control form-control-lg rounded-0" type="password" name="password" placeholder="Retaper le mot de pass" />

                                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Login</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        );
    }
}


export default Register 