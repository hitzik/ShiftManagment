import React, { Component } from 'react';
import logo from './logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shifts Managment</h1>
        </header>
      </div>
    );
  }
}

export default Header;
