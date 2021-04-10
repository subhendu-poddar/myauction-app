import React, { Component } from 'react';
import axios from 'axios';


class Auction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            bidAmount: 0,
            btn: 1,
            team: "",
            sold_team: ""
        }
    }

    componentDidMount = () => {
        this.getTeams()
    }

    getTeams = () => {
        axios.get('http://localhost:8080/teams/')
            .then((response) => {
                const data = response.data;
                this.setState({ teams: data });
                console.log("players data Received", data);
            })
            .catch(() => {
                console.log("Teams Not Received");
            });
    }

    teamList = () => {
        const teams = this.state.teams
        if (!teams.length) return null;
        
        return (
            <div>
                {teams.map((team, index) => (
                    <div key={index} className="team_btn">
                        <button 
                                onClick={() => this.AssignToTeam(team)} 
                                className="team_btn"
                            >
                            {team.teamName}
                        </button>
                    </div>
                ))}
            </div>
        )
    }


    inc = () => {
        let value = this.state.bidAmount
        let newValue = value + (value<1000 ? 100: value<2000 ? 200 : 500)
        this.setState({ bidAmount: newValue})
    }
    dec = () => {
        let value = this.state.bidAmount
        let newValue = value - (value<=0 ? value : value<=1000 ? 100 : value<=2000 ? 200 : 500)
        this.setState({ bidAmount: newValue })
    }

    AssignToTeam = (team) => {
        if (this.state.btn === 1) {
            this.setState({ btn: this.state.btn = 0 });
        }
        else {
            console.log(team);
            let bidAmt = this.state.bidAmount;
            console.log(bidAmt);
            axios.get('http://localhost:8080/teams/' + team)
                .then((response) => {
                    let data = response.data;
                    this.setState({ sold_team: data });
                })
                .catch(() => {
                    console.log("Unable to fetch sold team");
                });
            this.setState({ btn: this.state.btn = 1 });
            this.setState({ bidAmount: this.state.bidAmount = 0 });
        }
    }

    render() {
        const player = this.props.player
        return (
            <div className="center">
                Welcome to Auction Arena!!
                <br /> <br />
                <div className='card'>
                    <div className='container'>
                        <h2>Name : {player.name} </h2>
                        <h3>Base Amount : {player.baseBidAmount} </h3>
                    </div>
                </div>
                <br />
                <div>
                    <br /> 
                    {/* + ans - buttons */}
                    <h1 className="counter">{this.state.bidAmount}</h1>     <br />
                    <button onClick={this.inc} className="btn1"><h1>+</h1></button>
                    <button onClick={this.dec} className="btn2"><h3>-</h3></button>
                    <br /> <br /> 
                </div>
                {this.state.btn ? 
                    <button onClick={() => this.AssignToTeam(this.state.teams)}
                            className='submit_btn'>     <h2>Sold To </h2>
                    </button>
                    : <div>
                        {this.teamList(this.state.teams)}
                    </div>
                }

                <br />
                
            </div>

        );
    }
}

export default Auction;