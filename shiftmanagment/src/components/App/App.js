import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.js';
import FooterPage from '../Footer/FooterPage';
import 'react-calendar-month/dist/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import LeftMiddle from '../LeftMiddle/LeftMiddle';
import DropDown from '../DropDown/DropDown';
import Navbar from '../Navbar/Navbar';

// import Month from 'react-calendar-month';
// import DayData from 'react-calendar-month';

class App extends Component { 

  render() {
    // let data1 = {
    //   1: {component: <DayData>Jane</DayData>},
    //   3: {component: <DayData>Jon</DayData>},
    //   7: {component: <DayData>Max</DayData>},
    //   8: {component: <DayData>Lorraine</DayData>},
    //   9: {component: <DayData>Patrick</DayData>, className: 'today'},
    //   12: {component: <DayData>Sam</DayData>},
    //   20: {component: <DayData>Vera</DayData>},
    //   23: {component: <DayData>Loise</DayData>}
    // }

    return (
      <div className="App">
        <Header/>
        <NavbarFeatures/>
        {/* {component: <Month month={6} year={2018} />} */}
        {/* <Month year={2018} month={2}  data={data1}/> */}
        <DropDown/>
        <LeftMiddle/>
        <FooterPage/>
      </div>
    );
  }
}

export default App;
