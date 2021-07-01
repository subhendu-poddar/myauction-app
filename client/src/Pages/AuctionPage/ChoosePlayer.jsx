import axios from 'axios';
import React, { Component } from 'react';
import Auction from './Auction';
import './style.css'

class ChoosePlayer extends Component {
    constructor(){
        super()
        this.state = {
            players: [],
            selected: '',
            clicked: false
        }
    }

    componentDidMount = () => {
        this.getPlayers();
    }

    getPlayers = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/player/allPlayers`)
            .then((response) => {
                const data = response.data;
                this.setState({ players: data });
                //console.log("players data Recieved", data);
            })
            .catch(() => {
                console.log("Teams Not Recieved");
            });
    }
    // forward_To_Acution = (email) => {
    //         <div>
    //             Hello
    //         </div>
        
    //     // <Auction email={email}/>
    // }

    displayPlayers = (players) => {
        if (!players.length) return null;

        return (
            <div className='center'>
                <br/> <div className="head"> Choose a player! </div>
                <div>
                    <br /> <br />
                    {players.map((player, index) => (
                        <div className='inline' key={index}>
                            <div>
                                {player.soldTo === "None" &&
                                    <button className='player_btn' onClick={() =>
                                        this.setState({
                                            selected: player,
                                            clicked: true,
                                            players: []
                                        })
                                    }>
                                        <div className="playerName">{player.name}</div>
                                        <br />
                                        Base Bid Amount = {player.baseBidAmount}
                                    </button>}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        )
    }

    render() {
        return (
            <div className="center">
                {this.displayPlayers(this.state.players)}
                {/* {console.log(this.state.selected)} */}
                {this.state.clicked && 
                    <Auction player={this.state.selected}/>    
                }
            </div>
        );
    }

}

export default ChoosePlayer;