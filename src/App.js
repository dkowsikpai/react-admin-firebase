// Core Modules
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// Custom Containers
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import NotFound from './containers/NotFound/NotFound';
// Depandancy Modules
import * as firebase from "firebase/app";
import "firebase/auth";
import swal from 'sweetalert';
import ClockLoader from "react-spinners/ClockLoader";
// Depandancy Files
import fireConfig from './config/firebase.config';

firebase.initializeApp(fireConfig);

class App extends Component {
  
  state = { 
    isLoggedIn: false,
    isLoading: false
  }

  componentDidMount = () => {
    this.setState({isLoading: true});
    let cachedData = sessionStorage.getItem('auth_data');    
    if (!!cachedData) {
      let authData = JSON.parse(cachedData);
      firebase.auth().signInWithEmailAndPassword(authData.username, authData.password)
        .then(() => {
            this.setState({isLoggedIn: true, isLoading: false});
        })
        .catch(function(error) {
            swal("Error", error.message, "error").then(() => {
                window.location.reload();
            });
        });
    }else {
      this.setState({isLoading: false});
    }
  }

  authChange = (data) => {
    this.setState({isLoggedIn: true}, () => {
      sessionStorage.setItem('auth_data', JSON.stringify(data));
    });
  }
  
  render() { 
    return (  
      <React.Fragment>
        <ClockLoader
          css={{display: 'block', margin: '25vh auto'}}
          size={150}
          color={"#007D7D"}
          loading={this.state.isLoading} />
        {
          !this.state.isLoading ? 
          <Switch>  
            {
              this.state.isLoggedIn ? 
                <Route path="/" exact component={Home} />
              :
                <Route 
                    path="/" exact
                    render={(props) => <Login 
                                          {...props}  
                                          logHandler={this.authChange} />} />
            }
            <Route path="*" component={NotFound} />
          </Switch>
          : null
        }
      </React.Fragment>
    );
  }
}
 
export default App;