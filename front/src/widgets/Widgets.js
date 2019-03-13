import React, { Component } from 'react';
import FootballWidget from './FootballWidget';


class Widgets extends Component {

    state = {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Nav />
                <FootballWidget />
            </div>
        );
    }
}

export default Widgets;