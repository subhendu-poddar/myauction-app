import React, { Component } from 'react';

class Profile extends Component {
    
    showProfile(){
        var user = JSON.parse(localStorage.getItem('login'));
        var team = user[0]
        return (
            <div>
                Your Team - {team.teamName} <br />
                Team Manager - {team.manager} <br />
                Players Taken - {team.playersTaken} <br />
                Purchase Amount Remaining - {team.purseRemaining} <br />
            </div>
        )


        /*
        console.log(user[0])
        var t;
        fetch(`http://localhost:8000/teamData?email=${team.email}`,{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((result) =>{
            result.json().then((response) => {
                console.log(response);
                return (
                    <div>
                        Your Team - {response.teamName} <br />
                        Players Taken - {response.playersTaken} <br />
                        Purse Amount Remaining - {response. purseRemaining} <br />
                    </div>
                )
            //return response;
            //localStorage.setItem("teamDetails", JSON.stringify(response));
            //console.log(JSON.parse(localStorage.getItem('teamDetails')))
            })
        })
        //var t = JSON.parse(localStorage.getItem('teamDetails'));
        //alert(t);

        /*           
        return(
            <div>
                Your Team - {team} <br />
                Your Team - {t[0].name} <br />
                Your Captain - {t[0].captain} <br />
                Purse Amount - {t[0].purseAmount} <br />
            </div>
        )
        */
    }
    render() {
        return (
            <div>
                Welcome to Profile!!
                <h1/>
                {this.showProfile()}
            </div>
            
        );
    }
}

export default Profile;