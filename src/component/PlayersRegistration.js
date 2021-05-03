import React, { Component } from "react";
//import { Redirect } from 'react-router-dom';
//import Protected from "./Protected";
import axios from 'axios'

//var defaultAmount = 100;
class PlayersRegistration extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            soldTo: "None",
            password: '',
            c_password: '',
            baseBidAmount: '',
            bidAmount : ''
        }
    }
    submit = (evt) => {
        if (this.state.password !== this.state.c_password) {
            window.alert(" Password and Confirm Password are not same !!")
            return
        }
        if (this.state.email.length === 0) {
            window.alert('Enter Valid Details !!')
            return
        }
        evt.preventDefault()
        const registered = this.state
        delete registered.c_password

        axios.post('http://localhost:8080/player-signup', registered)
            .then((response) => {
                console.log(response)
                if (!response.data.success) {
                    alert('Player with this Email Id already Exists!!')
                    this.resetState()
                }
                else {
                    localStorage.setItem('player', response.config.data)
                    console.log("Data has been successfully sent to the server !!")
                    this.resetState()
                    //window.location.href = '/Home'
                }

            })
            .catch((error) => {
                console.log("Internal Server Error !!")
            })
    }

    resetState = () => {
        this.setState({
            name: '',
            email: '',
            password: '',
            c_password: '',
            baseBidAmount: ''
        })
    }





    render() {
        return (
            <div className='form'>
                <div className='form-label'>Player Registration Page</div>
                <br />
                <br />
                <input 
                    className='form-input'
                    type="text" 
                    placeholder="Name" 
                    value= {this.state.name}
                    onChange={(evt) => { this.setState({ name: evt.target.value }) }} />
                <br /> 
                <br />
                <input 
                    className='form-input'
                    type="email" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(evt) => { this.setState({ email: evt.target.value }) }} />
                <br /> 
                <br />
                <input
                    className='form-input'
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(evt) => { this.setState({ password: evt.target.value }) }} />
                <br />
                <br />
                <input
                    className='form-input'
                    type="password"
                    placeholder="Confirm Password"
                    value={this.state.c_password}
                    onChange={(evt) => { this.setState({ c_password: evt.target.value }) }} />
                <br />
                <br />
                <input 
                    className='form-input'
                    type="number" 
                    placeholder="baseBidAmount"
                    value={this.state.baseBidAmount}
                    onChange={(evt) => { this.setState({ baseBidAmount: evt.target.value }) }} /> 
                <br /> 
                <br />
                <div className='button_center'>
                    <button className='button' onClick={(evt) => this.submit(evt)} > Submit </button>
                </div>
                
            </div>
        )
    }
}

export default PlayersRegistration;