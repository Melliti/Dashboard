import React, { Component } from 'react';
import FootballWidget from './FootballWidget';

class Widgets extends Component {

    state = {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <FootballWidget />
                </div>
            </div>
        );
    }
}

export default Widgets;