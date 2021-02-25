import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Detailview from './Detailview'

const url = "http://localhost:3001/posts"

class Posts extends Component {
    constructor() {
        super()
        this.state= {
            topics: ""
        }
    }

    componentDidMount(){
        axios.get(url)
        .then(res=> {

            // console.log(res.data)
            this.setState({
                topics: res.data
            })
        })
    }
    render(){
        return(
            <div>
                <Detailview detail={this.state.topics}></Detailview>
            </div>
        )
    }
   
}

export default Posts
