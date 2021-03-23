import axios from 'axios';
import React, { Component } from 'react';

class player extends Component {

    state = {
        players: []
    }

    componentDidMount = () => {
        this.getPlayers();
    }

    getPlayers = () => {
        axios.get('http://localhost:8080/players/')
            .then((response) => {
                const data = response.data;
                this.setState({ players: data });
                console.log("players data Recieved", data);
            })
            .catch(() => {
                console.log("Teams Not Recieved");
            });
    }

    displayPlayers = (players) => {
        if (!players.length) return null;

        return players.map((player, index) => (
            <div key={index}>
                <h4>Player-{player.name} :: Base_Bid_Amount-{player.baseBidAmount} </h4>
            </div>
        ))
    }

    render() {
        return (
            <div>
                Players<br />
                ----------------------------------------------------------------

                {this.displayPlayers(this.state.players)}
            </div>
        );
    }

}

export default player;