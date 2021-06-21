import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    
    constructor(){
        super()
        this.state = {
            team : '',
            players: []
        }
    }
    componentDidMount = () =>{
        this.getProfile();
    }

    getProfile = async () => {
        let user = localStorage.getItem('team');
        user = JSON.parse(user);
        const URL = 'http://localhost:8080';

        try {
            const response = await axios.get(process.env.LOCALSERVER+`/team/${user.email}`);

            if(response){
                const data = response.data;
                this.setState({ team: data[0] });

            } else {
                console.log("Team Not Recieved");
            }

            const anotherResponse = await axios.get(`/team/${this.state.team.email}/players`);

            if (anotherResponse) {
                const data = anotherResponse.data;
                this.setState({ players: data });

            } else {
                console.log("Team Players Not Recieved");
            }

        
        } catch (err) {
            console.log("Something error occurred.");
        }
    }
    showplayers = () => {
        var players = this.state.players;

        return players.map((player, index1) => (
            <div key={index1}> {player} </div>
        ))
    }
    displayTeam = () =>{
        const team = this.state.team;

        return (
            <div className='center'>
                <div className="ladder-nav">
                    <div className="navStrong">
                        Team - <strong> {team.teamName} </strong> <br />
                        Manager - <strong> {team.manager} </strong> <br />
                        Email Id - <strong> {team.email} </strong> <br />
                        Purse Amount Remaining - <strong> {team.purseRemaining} </strong> <br /> <br/>
                        Players Taken - <strong> { this.showplayers() } </strong> <br />
                    </div>
                    
                </div>
                
            </div>
        )
    }
    render() {
        
        return (
            <div className='center'>
                <br/>
                <div className="head"> Welcome to Profile! </div>
                <br/>
                
                {this.displayTeam()}
            </div>
            
        );
    }
}

export default Profile;