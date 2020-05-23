// Core Modules
import React from 'react';
// Dependancy Modules
import * as firebase from 'firebase/app';
import 'firebase/auth';

const Logout = () => {
    firebase.auth().signOut()
    .then(() => {
       sessionStorage.setItem('auth_data', '');
       window.location.pathname = '/';
    }).catch(e => alert('two : '+e.message));
}

const Navbar = () => {

    let HeaderString = '';
    if (window.location.pathname === '/') {
        HeaderString = 'Dashboard';
    }else if (window.location.pathname === '/registrations') {
        HeaderString = 'Registrations';
    }else if (window.location.pathname === '/lectures') {
        HeaderString = 'Lectures';
    }else if (window.location.pathname === '/registrations/crash') {
        HeaderString = "Crash Course";
    }else if (window.location.pathname === '/registrations/plusone') {
        HeaderString = "Plus One";
    }else if (window.location.pathname === '/registrations/plustwo') {
        HeaderString = "Plus Two";
    }else if (window.location.pathname === '/subscriptions') {
        HeaderString = "Mail Subscriptions";
    }else if (window.location.pathname === '/lectures/phy') {
        HeaderString = "Physics Lectures";
    }else if (window.location.pathname === '/lectures/che') {
        HeaderString = "Chemistry Lectures";
    }else if (window.location.pathname === '/lectures/mat') {
        HeaderString = "Maths Lectures";
    }else if (window.location.pathname === '/lectures/bot') {
        HeaderString = "Botony Lectures";
    }else if (window.location.pathname === '/lectures/zoo') {
        HeaderString = "Zoology Lectures";
    }else if (window.location.pathname === '/createstd') {
        HeaderString = "Students";
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
            <div className="container-fluid">
            <div className="navbar-wrapper">
                <span className="navbar-brand">{HeaderString}</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon icon-bar"></span>
                <span className="navbar-toggler-icon icon-bar"></span>
                <span className="navbar-toggler-icon icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end">
                <form className="navbar-form">
                    <div className="input-group no-border">
                    </div>
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">person</i>
                            <p className="d-lg-none d-md-block">
                                Account
                            </p>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                        <span className="dropdown-item" onClick={Logout}>Log out</span>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}
 
export default Navbar;