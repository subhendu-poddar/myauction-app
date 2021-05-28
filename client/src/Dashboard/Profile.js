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
            //console.log("Team Recieved",data);
        })
        .catch(()=>{
            console.log("Team Not Recieved");
        });

    }
    displayTeam = (team) =>{
        if(!team.length)  return null;

        return team.map((each,index) =>(
            <div className='center' key = {index}>
                <h2>Team - {each.teamName}</h2>
                <h3>Manager - {each.manager}</h3>
                <h3>Players Taken - {each.playersTaken}</h3>
                <h3>Purse Amount Remaining -{each.purseRemaining}</h3>
            </div>
        ))
    }
    render() {
        
        return (
            <div className='center'>
                <br/><h1>Welcome to Profile!</h1><br/>
                
                {this.displayTeam(this.state.team)}
            </div>
            
        );
    }
}

export default Profile;