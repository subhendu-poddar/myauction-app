import axios from 'axios';
import React, { Component } from 'react';

class Leaderboard extends Component {

    constructor(){
        super()
        this.state = {
            datails: []
        }
    }

    componentDidMount = () => {
        
        axios.get('/teams', this.state.details)
        .then((response) => {
            alert(response.email)
            response.map((data, index) => {
                <div key={index}>
                    <br />
                    Team Name - {data.teamName} <br />
                    Players Taken - {data.playersTaken} <br />
                    Purchase Amount Remaining - {data.purseRemaining} <br />
                </div>
            })
        })
        .catch((error) => {
            console.log('Internal Server Error !!')
        })

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