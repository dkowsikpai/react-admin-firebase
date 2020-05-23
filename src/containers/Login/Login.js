// Core Modules
import React, { Component } from 'react';
// Styles
import './Login.css';
// Depandancy Modules
import * as firebase from "firebase/app";
import "firebase/auth";
import swal from 'sweetalert';
import ClockLoader from "react-spinners/ClockLoader";

class Login extends Component {
    
    state = {  
        username: '',
        password: '',
        isLoading: false
    }
    
    usernameChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    loginHandler = () => {
        this.setState({isLoading: true});
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
        .then(() => {
            this.props.logHandler(this.state);
        })
        .catch(function(error) {
            swal("Error", error.message, "error").then(() => {
                window.location.reload();
            });
        });
    }

    render() { 
        return ( 
            <React.Fragment>
                <ClockLoader
                    css={{display: 'block', margin: '25vh auto',borderColor: 'red'}}
                    size={150}
                    color={"#007D7D"}
                    loading={this.state.isLoading} />
                {
                    this.state.isLoading ? null :
                        <div className="LoginPage">
                            <div className="css1"></div>
                            <div className="wrapper fadeInDown">
                            <div className="css2">
                                <div className="css3">
                                <h2 className="active"> Sign In </h2>
                                <div className="fadeIn first">
                                    <svg style={{width:'80px',height:'80px'}} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18,21L15,18L18,15V17H22V19H18V21M10,4A4,4 0 0,1 14,8A4,4 0 0,1 10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,14C11.15,14 12.25,14.12 13.24,14.34C12.46,15.35 12,16.62 12,18C12,18.7 12.12,19.37 12.34,20H2V18C2,15.79 5.58,14 10,14Z" />
                                    </svg>
                                </div>
                                <div className="css4">
                                <form>
                                    <input type="text" value={this.state.username} onChange={this.usernameChangeHandler} className="fadeIn second" placeholder="Username" />
                                    <input type="password" value={this.state.password} onChange={this.passwordChangeHandler} className="fadeIn third" placeholder="Password" />
                                    <input type="submit" onClick={this.loginHandler} className="fadeIn fourth" value="Log In" />
                                </form>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                }
            </React.Fragment>
        );
    }
}
 
export default Login;