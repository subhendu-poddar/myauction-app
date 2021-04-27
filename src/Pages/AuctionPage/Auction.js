import React, { Component } from 'react';
import axios from 'axios';

class Auction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            bidAmount: this.props.player.baseBidAmount,
            teamFixed: false,
            priceFixed: false,
            selected: '',
            sold_team: ''
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
                        <button className="team_btn"
                                onClick={() => 
                                    this.setState({
                                        selected: team,
                                        teamFixed: true,
                                        teams: []
                                    })
                                }
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

    async AssignToTeam() {
        try {
            const player = this.props.player
            const team = this.state.selected

            player.soldTo = team.email

            team.purseRemaining = team.purseRemaining - this.state.bidAmount
            team.playersTaken.push(player.email)

            const url = "http://localhost:8080"
            const data1 = await axios.put(url + '/players/update/' + player.email, player)
            const data2 = await axios.put(url + '/teams/update/' + team.email, team)

            return (
                <div>
                    {console.log(data1)} 
                    {console.log(data2)}
                    {data1.success ? <div> Player {player.name} Updated</div> : <div> player Update Operation failed</div>}
                    {data2.success ? <div> Team {team.teamName} Updated</div> : <div> Team Update Operation failed</div>}
                </div>
            )
        }catch(error){
            return(
                <div>Error found: {error}</div>
            )
        }


    }

    heading = (player) => {
        return (
            <div>
                Welcome to Auction Arena!!
                    <br /> <br />
                <div className='card'>
                    <div className='container'>
                        <h2>Name : {player.name} </h2>
                        <h3>Base Amount : {player.baseBidAmount} </h3>
                    </div>
                </div>
                <br />
            </div>
        )
    }
    soldOption = () => {
        return (
            <div>
                <br />
                {/* + ans - buttons */}
                <h1 className="counter">{this.state.bidAmount}</h1>     <br />
                <button onClick={this.inc} className="btn1"><h1>+</h1></button>
                <button onClick={this.dec} className="btn2"><h3>-</h3></button>
                <br /> <br />

                <button className='submit_btn'
                    onClick={() =>
                        this.setState({ priceFixed: true })
                    }
                >     <h2>Sold To </h2>
                </button>
            </div>
        )
    }

    render() {
        const player = this.props.player
        return (
            <div className="center">
                {this.heading(player)}

                {   this.state.priceFixed ?
                        this.state.teamFixed ?
                            this.AssignToTeam()
                            // window.location.href = '/Adminpage'
                        :   this.teamList()
                    :   this.soldOption()
                }
                
                {/* {!this.state.priceFixed && !this.state.teamFixed && this.soldOption()}
                {this.state.priceFixed && !this.state.teamFixed && this.teamList()}
                {this.state.priceFixed && this.state.teamFixed && this.AssignToTeam()} */}

                <br />
                
            </div>

        );
    }
}

export default Auction;