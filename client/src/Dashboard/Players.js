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
        axios.get('http://localhost:8080/player/allPlayers')
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
            <div className="scrims-ladder--container" key={index}>
                <div className="ladder-result">
                    <div className="ladder-nav--results-col"> {player.name} </div>
                    <div className="ladder-nav--results-col"> {player.baseBidAmount} </div>
                    <div className="ladder-nav--results-col"> {player.bidAmount === 0 ? "-" : player.bidAmount} </div>
                    <div className="ladder-nav--results-col"> {player.soldTo === "None" ? "-" : player.soldTo} </div>
                    <div className="ladder-nav--results-col"> {player.email} </div>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <br/>
                <div className="head"> Players </div> <br/> <br/>

                <div className="scrims-ladder--container">
                    <div className="ladder-nav">
                        <div className="ladder-nav--results-col">
                            <label> Player Name </label>
                        </div>
                        <div className="ladder-nav--results-col">
                            <label> Base Bid Amount </label>
                        </div>
                        <div className="ladder-nav--results-col">
                            <label> Amount Sold </label>
                        </div>
                        <div className="ladder-nav--results-col">
                            <label> Player's Team </label>
                        </div>
                        <div className="ladder-nav--results-col">
                            <label> Email Id </label>
                        </div>
                    </div>
                </div>

                {this.displayPlayers(this.state.players)}
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        );
    }

}

export default player;