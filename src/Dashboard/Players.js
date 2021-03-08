import React, { Component } from 'react';

class Players extends Component {

    constructor() {
        super()
        this.state = {
            datails: []
        }
    }

    componentDidMount() {

        let url = 'http://localhost:8000/players'
        fetch(url)
            .then((result) => result.json())
            .then((response) => {
                let fetchDetails = response.map((data, index) => {
                    //console.log(data)
                    return (
                        <div key={index}>
                            <br />
                            Player Name - {data.Name} <br />
                            Email Id - {data.email} <br/>
                            Base Bid Amount - {data.baseBidAmount} <br />
                        </div>
                    )
                })
                this.setState({ details: fetchDetails })
            })

    }

    render() {
        return (
            <div>
                Players<br />
                ----------------------------------------------------------------
                {this.state.details}
            </div>
        );
    }

}

export default Players;