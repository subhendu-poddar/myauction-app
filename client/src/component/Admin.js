import React, { Component } from 'react';
import axios from 'axios'


class Admin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }


  login = (evt) => {
    evt.preventDefault()
    const user = this.state

    axios.post('http://localhost:8080/admin/signin', user)
      .then((response) => {
        //console.log(response)
        if (!response.data.success) {
          alert('Invalid Email or Password !!')
          this.resetState()
        }
        else {
          localStorage.setItem('admin', response.config.data)
          console.log(response.config.data)
          console.log("signin successful !!")
          this.resetState()
          window.location.href = '/AdminPage'
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

      <form className='form'>
        <div className='form-label'>Admin Login Page</div>
        <br />
        <input
          className='form-input'
          type="text"
          placeholder="Admin Email"
          value={this.state.email}
          onChange={(evt) => { this.setState({ email: evt.target.value }) }} /> <br /> <br />
        <input
          className='form-input'
          type="password"
          placeholder="Admin Password"
          value={this.state.password}
          onChange={(evt) => { this.setState({ password: evt.target.value }) }} /> <br /> <br />
        <div className='button_center'>
          <button className='button' onClick={(evt) => this.login(evt)} > Login </button>
        </div>
      </form>
    )
  }
}


export default Admin;