import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../css/App.css';
import AptIndex from './AptIndex'
import AptDetail from './AptDetail'
import NewApts from './NewApts'
import { getApts } from '../api'
import Login from './Login';
import AuthService from '../services/AuthService'
import { createApt } from '../api'



const Auth = new AuthService()

class App extends Component {
  constructor(props){
        super(props)
        this.state = {
            apts: [],
            newAptSuccess: false
        }
    }


    componentWillMount() {
      console.log('app props', this.props);
        getApts()
        .then(APIapts => {
            this.setState({
                apts: APIapts
            })
        })
    }

    handleNewApt(newAptInfo) {
      createApt(newAptInfo)
      .then(successApt => {
          console.log("SUCCESS! New apt: ", successApt);
          return getApts()
      })
      .then(APIapts => {
        this.setState({
          apts: APIapts,
          newAptSuccess: true
      })
    })
  }

  render() {
    return (
        <div>
        <div className="App"> <h1>Home Finder</h1></div>
        <Switch>
              <Route path='/Apts/:id' component={AptDetail} />
              <Route exact path="/login" component={Login}/>
                <Route exact path="/" render={ (props) => <AptIndex apts={this.state.apts}/> } />
                <Route path="/NewApts" render={ (props) => <NewApts success={this.state.newAptSuccess} handleApt={this.handleNewApt.bind(this)} /> } />
          </Switch>
          </div>

    );
  }
}
export default App
