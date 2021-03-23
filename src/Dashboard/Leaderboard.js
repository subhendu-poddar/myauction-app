import axios from 'axios';
import React, { Component } from 'react';

class Leaderboard extends Component {

    state = {
        teamName : '',
        teams : []  
    }

    componentDidMount = () =>{
        this.getTeams();
    }

    getTeams = () =>{
        axios.get('http://localhost:8080/teams/')
        .then((response) =>{
            const data = response.data;
            this.setState({teams : data});
            console.log("Teams Recieved",data);
        })
        .catch(()=>{
            console.log("Teams Not Recieved");
        });
    }

    displayTeams = (teams) =>{
        if(!teams.length)  return null;

        return teams.map((team,index) =>(
            <div key = {index}>
                <h3>Team-{team.teamName} :: playersTaken- {team.playersTaken}</h3>
            </div>
        ))
    }

    render(){
        return(
            <div>
                Leaderboard<br/>
                ----------------------------------------------------------------
                
                {this.displayTeams(this.state.teams)}
            </div>
        );
    }

}

export default Leaderboard;