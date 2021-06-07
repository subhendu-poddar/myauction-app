import React, { Component } from 'react';
import axios from 'axios';


class Auction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            btn: 1,
            team: "",
            sold_team : ""
        }
    }
    
    inc = () => {
        if (this.state.count < 1000) {
            this.setState({ count: this.state.count + 100 });
        }
        else if (this.state.count < 2000) {
            this.setState({ count: this.state.count + 200 });
        }
        else {
            this.setState({ count: this.state.count + 500 });
        }
    }
    dec = () => {
        if (this.state.count <= 0) {
            this.setState({ count: this.state.count = 0 })
        }
        else if (this.state.count < 1000) {
            this.setState({ count: this.state.count - 100 });
        }
        else if (this.state.count < 2000) {
            this.setState({ count: this.state.count - 200 });
        }
        else {
            this.setState({ count: this.state.count - 500 });
        }
    }
    reset(team) {
        if (this.state.btn === 1) {
            this.setState({ btn: this.state.btn = 0 });
        }
        else {
            console.log(team);
            let bidAmt = this.state.count;
            console.log(bidAmt);
            axios.get('http://localhost:8080/team/'+ team)
                .then((response) => {
                    let data = response.data;
                    this.setState({ sold_team : data });
                    console.log(data);
                })
                .catch(() => {
                    console.log("Unable to fetch sold team");
                });
            const t = {
                "teamName" : team,
                "purseRemaining" : "purseRemaining" - bidAmt
            }
            {/*axios.put('http://localhost:8080/teams/'+ team, t)
                .then((t)=>{
                    console.log(t);
                })
                .catch((error) =>{
                    console.log(error);
                })
            */}
            this.setState({ btn: this.state.btn = 1 });
            this.setState({ count: this.state.count = 0 });
        }
    }

    render() {
        return (
            <div className="center">
                Welcome to Auction Arena!
                <br /> <br />
                <div className='card'>
                    <div className='container'>
                        <h2>Name : need to fetch </h2>
                        <h3>Base Amount : need to fetch </h3>
                    </div>
                </div>
                <br />
                <div>
                    <br />
                    <h1 className="counter">{this.state.count}</h1>
                    <br />
                    <button onClick={this.inc} className="btn1"><h1>+</h1></button>
                    <button onClick={this.dec} className="btn2"><h3>-</h3></button>
                    <br /> <br /> </div>
                {this.state.btn ? <button onClick={() => this.reset()} className='submit_btn'><h2>Sold To </h2></button>
                    : <div>
                        <button onClick={() => this.reset("mi")} className='team_btn'><h2>MI</h2></button>
                        <button onClick={() => this.reset("csk")} className="team_btn"><h2>CSK</h2></button>
                        <button onClick={() => this.reset("rcb")} className="team_btn"><h2>RCB</h2></button>
                        <button onClick={() => this.reset("kkr")} className="team_btn"><h2>KKR</h2></button>
                    </div>}


                <br />
                {/*<table className='card'>
                    <tbody>
                        <tr>
                            <th style={{ width: '50%' }}>Team</th>
                            <th>Purse Amount Remaining</th>
                        </tr>
                        <tr>
                            <td>CSK</td>
                            <td>need to fetch</td>
                        </tr>
                        <tr>
                            <td>MI</td>
                            <td>need to fetch</td>
                        </tr>
                    </tbody>
            </table>*/}
            </div>

        );
    }
}

export default Auction;