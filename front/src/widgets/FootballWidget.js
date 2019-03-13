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
        //.then(response => this.setState({ teams: response.data }))
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }

    setLeague()
    {
        const { teams, league } = this.state;


        fetch("http://localhost:4000/teams/" + league.league)
        .then(response => response.json())
        .then(response => console.log(response))
        //.then(response =>  this.setState({ teams: response.data }))
        .catch(err => console.error(err))
    }

    renderContent = ({ id, shortName }) => <div key={id}>{shortName}</div>

    render() {
        const { teams, league } = this.state;
        return (
            <div>
                {/* {console.log(typeof(teams))} */}
                { teams.map(this.renderContent) }
                    <div className="form-group col-md-2">
                        <label>Choose a league</label>
                        <select 
                            className="form-control" 
                            id="selector" 
                            value={league} 
                            onChange={e => this.setState({ league: {...teams, league: e.target.value}})}>
                            <option>FL1</option>
                            <option>PL</option>
                            <option>BL1</option>
                            <option>SA</option>
                            <option>PD</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={e => this.setLeague(e.target.value)}>Submit</button>
            </div>
        )
    }
}

export default FootballWidget;