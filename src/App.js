import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './components/SideBar';
import SideBar from './components/SideBar';
import PointsBuyScreen from './containers/PointsBuyScreen';
class App extends Component {


  render() {

    let routes = (
      <Switch>
        <Route path='/' component={PointsBuyScreen}/>
        {/* <Route path='/Points_Buy_In' component={PointsBuyScreen}/> 
        <Route path='/Player Race' component={PointsBuyScreen}/>
        <Route path='/Character Background' component={PointsBuyScreen}/>
        <Route path='Pick Your Class' component={PointsBuyScreen}/>      */}
      </Switch>
    ) 

    return (
      <div className="App">
        <SideBar />
           {routes}
         <footer />
      </div>
    );
  }
}

export default App;
