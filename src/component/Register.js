import React, { Component } from "react"
//import {Redirect} from 'react-router-dom'
import Protected from "./Protected"
import axios from 'axios'

var defaultAmount = 20000;
class Register extends Component {
    constructor(){
        super()
        this.state = {
            teamName:'',
            manager:'',
            email:'',
            password:'',
            purseRemaining: defaultAmount,
            playersTaken: 0,
            c_password:''
        }
    }

    register = (evt) => {
        if (this.state.password !== this.state.c_password) {
            window.alert(" Password and Confirm Password are not same !!")
            return
        }
        if(this.state.email.length===0) {
            window.alert('Enter Valid Details !!')
            return
        }
        evt.preventDefault()
        const registered = this.state
        delete registered.c_password

        axios.post('/team-signup', registered)
            .then((response) =>{
                console.log(response)
                if(!response.data.success){
                    alert('Team with this Email Id already Exists!!')
                    this.resetState()
                }
                else{
                    localStorage.setItem('team', response.config.data)
                    console.log("Data has been successfully sent to the server !!")
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
            teamName: '',
            manager: '',
            email: '',
            password: '',
            purseRemaining: '',
            playersTaken: '',
            c_password: ''
        })
    }

    render() {
        return (
            <div>
                Registration Page
                <br />
                <Protected/>
                <br />
                <input 
                    type="text" 
                    placeholder="Team Name" 
                    value = {this.state.teamName}
                    onChange={(evt) => { this.setState({ teamName: evt.target.value }) }} /> 
                <br /> 
                <br />
                <input 
                    type="text" 
                    placeholder="Manager Name"
                    value={this.state.manager}
                    onChange={(evt) => { this.setState({ manager: evt.target.value }) }} /> 
                <br /> 
                <br />
                <input 
                    type="email" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(evt) => { this.setState({ email: evt.target.value }) }} /> 
                <br /> 
                <br />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(evt) => { this.setState({ password: evt.target.value }) }} /> 
                <br /> 
                <br />
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    value={this.state.c_password}
                    onChange={(evt) => { this.setState({ c_password: evt.target.value }) }} /> 
                <br /> 
                <br /> 
                <button onClick={(evt) => this.register(evt)} > Register </button>
            </div>
        )
    }
}

export default Register;