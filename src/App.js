import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import AptIndex from './components/AptIndex'
import AptDetail from './components/AptDetail'


class App extends Component {
  render() {
    return (
      <Switch>
          <div>
              <div className="App"> <h1>Welcome to Home Finder</h1></div>
              <Route exact path="/" component={AptIndex} />
              <Route path='/Apts/:id' component={AptDetail} />
          </div>
      </Switch>
    );
  }
}


export default App;
