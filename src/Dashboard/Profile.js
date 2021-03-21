import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    



    showProfile = () => {
        let user = localStorage.getItem('team')
        user = JSON.parse(user)
        console.log(user);  
        return (
            <div>
                My Team : {user.teamName} <br/>
                Manager : {user.manager} <br />
                Players Taken : {user.playersTaken} <br />
                Purse Remaining : {user.purseRemaining} <br />
            </div>
        )

    }
    render() {
        return (
            <div>
                Welcome to Profile!!
                <h1/>
                {this.showProfile()}

            </div>
            
        );
    }
}

export default Profile;