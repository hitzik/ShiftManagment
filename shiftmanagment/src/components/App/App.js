import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.js';
import FooterPage from '../Footer/FooterPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <FooterPage/>
        
        
        
        
      </div>
    );
  }
}

export default App;
