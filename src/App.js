import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {imageUrl: ""}
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    // EMAIL : response.profileObj.email
    console.log(response);
    this.setState({imageUrl: response.profileObj.imageUrl})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
        />
        <img src={this.state.imageUrl} ></img>
      </div>
    );
  }
}

export default App;
