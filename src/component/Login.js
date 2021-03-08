import React, { Component } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'

import Protected from "./Protected";
//import Router from 'react-router-dom';


class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }


    login = (evt) => {
        evt.preventDefault()
        const user = this.state

        axios.post('/signin', user)
            .then((response) => {
                console.log(response)
                if (!response.data.success) {
                    alert('No Team found with this Email Id !!')
                    this.resetState()
                }
                else {
                    localStorage.setItem('team', response.config.data)
                    console.log("signin successful !!")
                    this.resetState()
                    window.location.href = '/Home'
                }

            })
            .catch((error) => {
                console.log("Internal Server Error !!")
            })
    }

    resetState = () => {
        this.setState({
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <div>
                Login Page
                <br />
                <Protected/>
                <br />
                <input 
                    type="text" 
                    placeholder="Email" 
                    value= {this.state.email}
                    onChange={(evt) => { this.setState({ email: evt.target.value }) }} /> <br /> <br />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(evt) => { this.setState({ password: evt.target.value }) }} /> <br /> <br />
                <button onClick={(evt) => this.login(evt)} > Login </button>
            </div>
        )
    }
}

export default Login;