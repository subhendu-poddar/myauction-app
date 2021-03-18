import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    
    showProfile = () => {
        var user = localStorage.getItem('team')
        var email = user[0].email
        
        axios.get(`http://localhost:8080/myteam-data/:${email}`, email)
            .then((response) => {
                console.log(response.email)
                alert(response)
                return (
                    <div>
                        TeamName: {response.teamName} <br /> <br />
                        Manager: {response.manager} <br /> <br />
                        Email Id: {response.email} <br /> <br />
                        Purchase Remaining: {response.purseRemaining} <br /> <br />
                        Total Players Taken: {response.playersTaken} <br /> <br />
                    </div>
                )


            })
            .catch((error) => {
                console.log('Error: ', error)
            })
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