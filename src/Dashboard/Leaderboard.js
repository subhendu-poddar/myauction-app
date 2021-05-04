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
            //console.log("Teams Recieved",data);
        })
        .catch(()=>{
            console.log("Teams Not Recieved");
        });
    }

    displayTeams = (teams) =>{
        if(!teams.length)  return null;

        return teams.map((team,index) =>(
            <table>
                <tbody>
            <tr key = {index}>
                    <th>{team.teamName}</th>
                    <th>{team.playersTaken}</th>
                    <th>{team.purseRemaining}</th>
            </tr>
            </tbody>
            </table>
        ))
    }

    render(){
        return(
            <div className="center">
                Leaderboard<br/>
                ----------------------------------------------------------------
                
                {this.displayTeams(this.state.teams)}
            </div>
        );
    }

}

export default Leaderboard;