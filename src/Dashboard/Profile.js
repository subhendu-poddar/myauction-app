import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    



    /*showProfile = () => {
        var user = localStorage.getItem('team')
        var email = user[0].email   
        const url = 'http://localhost:8080/myteam-data'

        try{
            const res = axios.get(`${url}/${email}`);
            console.log(res)
        } catch(error) {
            console.log(error)
        }

    }*/
    render() {
        return (
            <div>
                Welcome to Profile!!
                <h1/>
                {/*{this.showProfile()*/}

            </div>
            
        );
    }
}

export default Profile;