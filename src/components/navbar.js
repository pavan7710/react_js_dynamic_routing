import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

export default class Navbar  extends Component {
    render() {
        return (
            <div>
               <ul className="nav">
                    <li className="nav-item">
                        <Link to= "/" className="nav-link ">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to= "/about" className="nav-link ">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to= "/form" className="nav-link ">Form</Link>
                    </li>
                    <li className="nav-item">
                        <Link to= "/posts" className="nav-link ">Details</Link>
                    </li>
                </ul> 
            </div>
        )
    }
}
