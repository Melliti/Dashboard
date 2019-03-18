import React, { Component } from 'react';
import '../style.css';

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

    renderContent = ({ id, crestUrl, shortName }) => <div key={id} className="clubInfo"><img src={crestUrl} alt="logo" className="clubLogo"/>{shortName}</div>

    render() {
        const { teams } = this.state;
        return (
            <div className="col-12 col-md-5 widget">
                <div className="clubList">
                    { teams.map(this.renderContent) }
                </div>
                <div 
                    className="form-group col-md-12" 
                    style={{marginTop: 5, marginBottom: 5}}>
                    <label 
                        htmlFor="league" 
                        className="col-sm-5 pull-right" 
                        style={{padding: 0}} >Choose a league
                    </label>
                    <select
                        style={{padding: 0}}
                        className="col-sm-7 pull-right"
                        id="selector" 
                        onChange={e => this.setState({ league: {...teams, league: e.target.value}})}>
                        <option value="FL1">Ligue 1</option>
                        <option value="PL">Premier League</option>
                        <option value="BL1">BundesLiga</option>
                        <option value="SA">Serie A</option>
                        <option value="PD">Liga</option>
                    </select>
                    <button 
                    style={{padding: 0, borderRadius: 0, verticalAlign: 0}} 
                    className="btn btn-secondary col pull-right" 
                    onClick={e => this.setLeague(e.target.value)}>
                        Submit
                    </button>    
                </div>
                
            </div>
        )
    }
}

export default FootballWidget;