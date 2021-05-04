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
                //console.log("players data Recieved", data);
            })
            .catch(() => {
                console.log("Teams Not Recieved");
            });
    }

    displayPlayers = (players) => {
        if (!players.length) return null;

        return players.map((player, index) => (
            <div key={index} className="center">
                <h3>Name-{player.name}</h3><h4> Sold To - {player.soldTo}</h4>
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