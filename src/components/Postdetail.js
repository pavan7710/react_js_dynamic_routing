import axios from 'axios'
import React, { Component } from 'react'

const url = 'http://localhost:3001/posts'

export default class Postdetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            details: ""
        }
    }
    componentDidMount(){
        // console.log(`${url}/${this.props.match.params.id}`, this.props.match.params.id )
        axios.get(`${url}/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({
                details:res.data
            })
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.details.name}</h2>
                <p>{this.state.details.email}</p>
            </div>
        )
    }
}
