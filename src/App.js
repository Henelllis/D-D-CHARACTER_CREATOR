import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './components/SideBar';
import SideBar from './components/SideBar';

class App extends Component {


  render() {

    let routes = (
      <Switch>
        <Route path='/'/>
        <Route path='/Points_Buy_In'/> 
        <Route path='/Player Race'/>
        <Route path='/Character Background'/>
        <Route path='Pick Your Class'/>     
      </Switch>
    ) 

    return (
      <div className="App">
        <header className="header_container">
          header
        </header>
        <SideBar />
           {routes}
         <footer />
      </div>
    );
  }
}

export default App;
