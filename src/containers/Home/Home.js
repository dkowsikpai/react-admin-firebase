// Core Modules
import React, { Component } from 'react';
// Components
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// Styles
import '../assets/css/material-dashboard.css';

class Home extends Component {
    
    state = { 
        usedSpace: '...',
        mailSubscriptions: '...',
        registarionCount: '...'
    }
    
    render() { 
        return (  
            <div className="wrapper ">
                <Sidebar />
                <div className="main-panel">
                    <Navbar />
                    <div className="content">
                        <div className="container-fluid">

                            <div className="row">

                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header card-header-warning card-header-icon">
                                            <div className="card-icon">
                                                <i className="material-icons">sd_storage</i>
                                            </div>
                                            <p className="card-category">Used Space</p>
                                            <h3 className="card-title">
                                                {this.state.usedSpace}/5
                                                <small>GB</small>
                                            </h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons text-danger">warning</i>
                                                <a href="https://firebase.google.com/pricing/"  target="_blank" rel="noopener noreferrer" >Get More Space...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
 
export default Home;