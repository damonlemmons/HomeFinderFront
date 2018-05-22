import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import '../css/App.css';
import AptIndex from './AptIndex'
import AptDetail from './AptDetail'
import { getApts } from '../api'
import Login from './Login';



class App extends Component {
  constructor(props){
        super(props)
        this.state = {
            apts: []
        }
    }

    componentWillMount() {
        getApts()
        .then(APIapts => {
            this.setState({
                apts: APIapts
            })
        })
      }

  render() {
    return (
      <Switch>
          <div>
              <div className="App"> <h1>Welcome to Home Finder</h1></div>
              <Route exact path="/" component={AptIndex} />
              <Route path='/Apts/:id' component={AptDetail} />
              <Route exact path="/login" component={Login}/>
          </div>
      </Switch>
    );
  }
}

export default App
