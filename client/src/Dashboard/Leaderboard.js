import axios from 'axios';
import React, { Component } from 'react';

class Leaderboard extends Component {

    state = {
        teamName: '',
        teams: [],
        players: []
    }

    componentDidMount = () => {
        this.getTeams();
    }

    getTeams = () => {
        const URL = 'http://localhost:8080';
        
        axios.get('/team/allTeams')
            .then((response) => {
                const data = response.data;
                this.setState({ teams: data });
                //console.log("Teams Recieved",data);
            })
            .catch(() => {
                console.log("Teams Not Recieved");
            });
    }

    showplayers = (players) => {

        return players.map((player,index1) => (
            <div key={index1}>
                <strong> {player} </strong> <br/> <br/>
            </div>
        ))
    }

    displayTeams = () => {
        var teams = this.state.teams;
        if (!teams.length) return null;

        return teams.map((team, index) => (
            <div className="scrims-ladder--container" key={index}>
                <div className="ladder-result">
                    <div className="ladder-nav--results-col"> {team.teamName} </div>
                    <div className="ladder-nav--results-col"> {team.purseRemaining} </div>
                    <div className="ladder-nav--results-col"> {this.showplayers(team.playersTaken)} </div>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <br/>
                <div className="head"> Leaderboard </div> <br/> <br/>

                <div className="scrims-ladder--container">
                    <div className="ladder-nav">
                        <div className="ladder-nav--results-col">
                            <label> Team Name </label>
                        </div>
                        <div className="ladder-nav--results-col">
                            <label> Purse Remaining </label>
                        </div>
                        <div className="ladder-nav--results-col">
                            <label> Players Taken </label>
                        </div>
                    </div>
                </div>

                {/* <br/> */}
                {this.displayTeams()}
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        );
    }

}

export default Leaderboard;