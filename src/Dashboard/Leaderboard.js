import axios from 'axios';
import React, { Component } from 'react';

class Leaderboard extends Component {

    state = {
        teamName: '',
        teams: []
    }

    componentDidMount = () => {
        this.getTeams();
    }

    getTeams = () => {
        axios.get('http://localhost:8080/teams/')
            .then((response) => {
                const data = response.data;
                this.setState({ teams: data });
                //console.log("Teams Recieved",data);
            })
            .catch(() => {
                console.log("Teams Not Recieved");
            });
    }
    showplayers = (team) => {
        return team.playersTaken.map((player, index) => (
            <div key={index}>
                {player}
            </div>
        ))
    }

    displayTeams = (teams) => {
        if (!teams.length) return null;

        return teams.map((team, index) => (
            <table>
                <tbody>
                    <tr key={index}>
                        <th>{team.teamName}</th>
                        <th>{this.showplayers(team)}</th>
                        <th>{team.purseRemaining}</th>
                    </tr>
                </tbody>
            </table>
        ))
    }

    render() {
        return (
            <div className="center">
                <br /> <h3>Leaderboard</h3> <br />
                <table>
                    <tbody>
                        <tr>
                            <th>Team Name</th>
                            <th>Players Taken</th>
                            <th>Purse Remaining</th>
                        </tr>
                    </tbody>
                </table>
                <br/>
                {this.displayTeams(this.state.teams)}
            </div>
        );
    }

}

export default Leaderboard;