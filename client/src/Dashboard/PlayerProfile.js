import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    
    constructor(){
        super()
        this.state = {
            player : [{}]
        }
    }
    componentDidMount = () =>{
        this.showProfile();
    }

    showProfile = () => {
        let user = localStorage.getItem('player')
        user = JSON.parse(user)
        //console.log(user.email); 
        axios.get('http://localhost:8080/player/'+ user.email)
        .then((response) =>{
            const data = response.data;
            this.setState({player : data});
            //console.log("player Recieved",data);
        })
        .catch(()=>{
            console.log("player Not Recieved");
        });
    }
    // showplayers = (playersTaken) => {
    //     return playersTaken.map((player, index1) => (
    //         <div key={index1}> {player} </div>
    //     ))
    // }
    displayplayer = (player) =>{
        if(!player.length)  return null;

        return player.map((each,index) =>(
            <div className='center' key = {index}>
                <div className="ladder-nav">
                    <div className="navStrong">
                        Name - <strong> {each.name} </strong> <br />
                        Email - <strong> {each.email} </strong> <br />
                        Base Bid Amount - <strong> {each.baseBidAmount} </strong> <br />
                        SoldTo - <strong> {each.soldTo==="None"?"(*----*)":each.soldTo} </strong> <br />
                        Bid Amount - <strong> { (each.bidAmount===0?"(*----*)":each.bidAmount) } </strong> <br />
                    </div>
                    
                </div>
                
            </div>
        ))
    }
    render() {
        
        return (
            <div className='center'>
                <br/>
                <div className="head"> Welcome to Profile! </div>
                <br/>
                
                {this.displayplayer(this.state.player)}
            </div>
            
        );
    }
}

export default Profile;