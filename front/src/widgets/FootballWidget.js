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
            <div className="col-md-4">
                { teams.map(this.renderContent) }
                    <div className="form-group col-md-8">
                        <label>Choose a league</label>
                        <select 
                            className="form-control" 
                            id="selector" 
                            onChange={e => this.setState({ league: {...teams, league: e.target.value}})}>
                            <option value="FL1">Ligue 1</option>
                            <option value="PL">Premier League</option>
                            <option value="BL1">BundesLiga</option>
                            <option value="SA">Serie A</option>
                            <option value="PD">Liga</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={e => this.setLeague(e.target.value)}>Submit</button>
            </div>
        )
    }
}

export default FootballWidget;