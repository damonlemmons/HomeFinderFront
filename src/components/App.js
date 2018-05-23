import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import '../css/App.css';
import AptIndex from './AptIndex'
import AptDetail from './AptDetail'
import { getApts } from '../api'
import Login from './Login';
import AuthService from '../services/AuthService'


const Auth = new AuthService()

class App extends Component {
  constructor(props){
        super(props)
        this.state = {
            apts: []
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

  render() {
    return (
        <div>
        <div className="App"> <h1>Home Finder</h1></div>
        <Switch>
              <Route exact path="/" component={AptIndex} />
              <Route path='/Apts/:id' component={AptDetail} />
              <Route exact path="/login" component={Login}/>
          </Switch>
              {/*<button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button> */}

          </div>

    );
  }
}

export default App
