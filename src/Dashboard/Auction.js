import React, { Component } from 'react';
import './Style.css';



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
        this.setState({count : this.state.count = 0});
    }

    render() {
        return (
            <div>
                Welcome to Auction Arena!
                <br /> <br />
                <div className='profileBox'>
                    {/*<img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />*/}
                    <br />
                    <br />
                    <h1>Name : </h1>
                    <h1>Base Amount : </h1>
                </div>
                <br />
                <br />
                <div>
                    <button onClick={this.inc} className="button1"><h1>+</h1></button> <br /> <br />
                    <button onClick={this.dec} className="button1"><h1>-</h1></button> <br /> <br />
                    <h1>{this.state.count}</h1>
                    <button onClick={this.reset} className='button2'><h2>Sold To</h2></button>
                </div>
                <br />
                <div className='profileBox'>
                    Teams Amounts Remaining
                    <h2>Team1 : </h2>
                    <h3>Amount : </h3>
                </div>
                <br />
                <div className='profileBox'>
                    Teams Amounts Remaining
                    <h2>Team2 : </h2>
                    <h3>Amount : </h3>
                </div>
                <br />
                <div className='profileBox'>
                    Teams Amounts Remaining
                    <h2>Team3 : </h2>
                    <h3>Amount : </h3>
                </div>
            </div>

        );
    }
}

export default Auction;