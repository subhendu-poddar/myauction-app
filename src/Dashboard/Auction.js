import React, { Component } from 'react';
import './Style.css';
import '../App.css'


class Auction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
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
    reset = () => {
        this.setState({ count: this.state.count = 0 });
    }

    render() {
        return (
            <div>
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
                    <br /> <br />
                    <button onClick={this.reset} className='submit_btn'><h2>Sold To ></h2></button>
                </div>
                <br />
                <table className='card'>
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
                </table>
            </div>

        );
    }
}

export default Auction;