import React, { Component } from "react"
//import {Redirect} from 'react-router-dom'
import Protected from "./Protected"
import axios from 'axios'

var defaultAmount = 50000;
class Register extends Component {
    constructor(){
        super()
        this.state = {
            teamName:'',
            manager:'',
            email:'',
            password:'',
            purseRemaining: defaultAmount,
            playersTaken: [],
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
        const URL = 'http://localhost:8080';

        axios.post('/team/signup', registered)
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
                    window.location.href = '/TeamPage'
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
            <div className='form'>
                <div className='form-label'>Team Registration Page</div>
                <br />
                <Protected/>
                <br />
                <input 
                    className='form-input'
                    type="text" 
                    placeholder="Team Name" 
                    value = {this.state.teamName}
                    onChange={(evt) => { this.setState({ teamName: evt.target.value }) }} /> 
                <br /> 
                <br />
                <input 
                    className='form-input'
                    type="text" 
                    placeholder="Manager Name"
                    value={this.state.manager}
                    onChange={(evt) => { this.setState({ manager: evt.target.value }) }} /> 
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
                <div className='button_center'>
                    <button className='button' onClick={(evt) => this.register(evt)} > Register </button>
                </div>
                
            </div>
        )
    }
}

export default Register;