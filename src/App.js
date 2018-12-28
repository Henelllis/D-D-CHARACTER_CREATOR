import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

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
        <header>
        </header>
        {/* sideBar */}
           {routes}
         <footer />
         trailer       
      </div>
    );
  }
}

export default App;
