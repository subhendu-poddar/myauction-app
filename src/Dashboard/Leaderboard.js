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
        axios.get('http://localhost:8080/teams')
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
    }

    render(){
        return(
            <div>
                Leaderboard<br/>
                ----------------------------------------------------------------
                {this.state.details}
            </div>
        );
    }

}

export default Leaderboard;