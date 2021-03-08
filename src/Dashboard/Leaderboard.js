import React, { Component } from 'react';

class Leaderboard extends Component {

    constructor(){
        super()
        this.state = {
            datails: []
        }
    }

    componentDidMount(){
        
        let url = 'http://localhost:8000/teamData'
        fetch(url)
            .then((result)=>result.json())
            .then((response)=>{
                let fetchDetails = response.map((data,index)=>{
                    //console.log(data)
                    return(
                        <div key={index}>
                            <br/>
                            Team Name - {data.teamName} <br/>
                            Manager Name - {data.manager} <br/>
                            {/*Email Id - {data.email} <br/>*/}
                            Purchase Amount Remaining - {data.purseRemaining} <br/>
                            Players Taken - {data.playersTaken} <br/>
                        </div>
                    )
                })
                this.setState({details : fetchDetails})
            })
        
    }

    render(){
        return(
            <div>
                Leaderboard<br/>
                ----------------------------------------------------------------
                {this.state.details}
            </div>
        );
    }

}

export default Leaderboard;