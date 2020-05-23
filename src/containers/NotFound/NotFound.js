// Core Modules
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Styles
import './NotFound.css';

class NotFound extends Component {
    
    state = {  }
    
    render() { 
        return ( 
            <div className="NotFoundBody">    
                <main>
                    <h1>4<span><i className="fas fa-ghost"></i></span>4</h1>
                    <h2>Error: 404 page not found</h2>
                    <p>Sorry, the page you're looking for cannot be accessed</p>
                    <p>Goto <Link to="/">Home <i className="fas fa-home"></i></Link></p>
                </main>
            </div>
        );
    }
}
 
export default NotFound;