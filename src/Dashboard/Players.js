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
            <table>
                <thead>
                    <tr key={index}>
                        <th>{player.name}</th>
                        <th>{player.soldTo}</th>
                    </tr>
                </thead>
            </table>
        ))
    }

    render() {
        return (
            <div className='center'>
                <br /> <h3>Players Details</h3> <br />

                {this.displayPlayers(this.state.players)}
            </div>
        );
    }

}

export default player;