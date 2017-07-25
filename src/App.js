import React, { Component } from 'react';
import './App.css';
import fb from './Firebase'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentVal: ""
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

handleChange(e) {
  let value = e.target.value;
  this.setState({currentVal: value});
  console.log(this.state.currentVal);

   
}

handleOnClick() {
    let db = fb.database();
    db.ref('users/').push().set({username: "jake paul", password: this.state.currentVal})
}

  render() {
    return (
      <div className="App App-tag">
        <div className="header">
          <h1 className="Title Title-tag">Scheduler</h1>
          <br/>
          <Log handleChange={this.handleChange.bind(this)} handleOnClick={this.handleOnClick} />
        </div>
      </div>
    );
  }
}

const Log = (props) =>
<div className="logIN-edit">
  <h3>Log in!</h3>
  <textarea className="loginput" onChange={props.handleChange}/>
  <br/>
  <button className="loginsubmit" onClick={props.handleOnClick} >Submit!</button>
</div>



export default App;
