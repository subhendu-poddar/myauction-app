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
        axios.get('http://localhost:8080/team/'+ user.email)
        .then((response) =>{
            const data = response.data;
            this.setState({team : data});
            //console.log("Team Recieved",data);
        })
        .catch(()=>{
            console.log("Team Not Recieved");
        });
    }
    // showplayers = (playersTaken) => {
    //     return playersTaken.map((player, index1) => (
    //         <div key={index1}> {player} </div>
    //     ))
    // }
    displayTeam = (team) =>{
        if(!team.length)  return null;

        return team.map((each,index) =>(
            <div className='center' key = {index}>
                <div className="ladder-nav">
                    <div className="navStrong">
                        Team - <strong> {each.teamName} </strong> <br />
                        Manager - <strong> {each.manager} </strong> <br />
                        Purse Amount Remaining - <strong> {each.purseRemaining} </strong> <br />
                        Players Taken - <strong> { (each.playersTaken) } </strong> <br />
                    </div>
                    
                </div>
                
            </div>
        ))
    }
    render() {
        
        return (
            <div className='center'>
                <br/>
                <div className="head"> Welcome to Profile! </div>
                <br/>
                
                {this.displayTeam(this.state.team)}
            </div>
            
        );
    }
}

export default Profile;