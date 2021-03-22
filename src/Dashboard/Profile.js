import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    
    constructor(){
        super()
        this.state = {
            team : [{}]
        }
    }
    componentDidMount = () =>{
        this.showProfile();
    }

    showProfile = () => {
        let user = localStorage.getItem('team')
        user = JSON.parse(user)
        //console.log(user.email); 
        axios.get('http://localhost:8080/teams/'+ user.email)
        .then((response) =>{
            const data = response.data;
            this.setState({team : data});
            console.log("Team Recieved",data);
        })
        .catch(()=>{
            console.log("Team Not Recieved");
        });

    }
    displayTeam = (team) =>{
        if(!team.length)  return null;

        return team.map((each,index) =>(
            <div key = {index}>
                <h2>Team - {each.teamName}</h2>
                <h2>Manager - {each.manager}</h2>
                <h3>Players Taken - {each.playersTaken}</h3>
                <h3>Purse Amount Remaining -{each.purseRemaining}</h3>
            </div>
        ))
    }
    render() {
        
        return (
            <div>
                Welcome to Profile!!
                <h1/>
                {this.displayTeam(this.state.team)}
            </div>
            
        );
    }
}

export default Profile;