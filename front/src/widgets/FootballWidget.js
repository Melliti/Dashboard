import React, { Component } from 'react';

class FootballWidget extends Component {

    state = {
        teams: [],
        league: ""
    }

    componentDidMount() {
        this.getTeams();
    }

    getTeams = _ => {
        console.log("getteams")
        fetch("http://localhost:4000/teams")
        .then(response => response.json())
        .then(response => this.setState({ teams: response.data }))
        .catch(err => console.error(err))
    }

    setLeague()
    {
        const { league } = this.state;


        fetch("http://localhost:4000/teams/" + league.league)
        .then(response => response.json())
        .then(response =>  this.setState({ teams: response.data }))
        .catch(err => console.error(err))
    }

    renderContent = ({ id, shortName }) => <div key={id}>{shortName}</div>

    render() {
        const { teams, league } = this.state;
        return (
            <div>
                { teams.map(this.renderContent) }
                    <div className="form-group col-md-2">
                        <label>Choose a league</label>
                        <select 
                            className="form-control" 
                            id="selector" 
                            onChange={e => this.setState({ league: {...teams, league: e.target.value}})}>
                            <option value="FL1">FL1</option>
                            <option value="PL">PL</option>
                            <option value="BL1">BL1</option>
                            <option value="SA">SA</option>
                            <option value="PD">PD</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={e => this.setLeague(e.target.value)}>Submit</button>
            </div>
        )
    }
}

export default FootballWidget;