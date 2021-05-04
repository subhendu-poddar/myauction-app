import axios from 'axios';
import React, { Component } from 'react';
import Auction from './Auction';

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
    // forward_To_Acution = (email) => {
    //         <div>
    //             Hello
    //         </div>
        
    //     // <Auction email={email}/>
    // }

    displayPlayers = (players) => {
        if (!players.length) return null;

        return (
            <div>
                Choose players <br/>
                ------------------------
                {players.map((player, index) => (
                    <div key={index}>
                        {player.soldTo==="None" &&
                        <button onClick={() => 
                            this.setState({ 
                                selected: player, 
                                clicked: true, 
                                players: []
                            }) 
                        }> 
                        {player.name}
                        </button>}
                    </div>
                ))}
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