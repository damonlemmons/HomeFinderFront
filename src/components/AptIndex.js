import React, { Component } from 'react'
import Apts from '../store/Apts'
import {Link} from 'react-router-dom'
import withAuth from './withAuth'
import AuthService from '../services/AuthService'


const Auth = new AuthService()


class AptIndex extends Component {

  handleLogout(){ // <- Remove local storage, and redirect the user
      Auth.logout()
      this.props.history.replace('/login');
    }

  componentWillMount(){
    console.log('index props', this.props.history);
    this.setState({apts: Apts})
  }
  render() {
    let list = this.state.apts.map(function(apt){
      return(
        <li key={apt.id}>
          <Link to={`/Apts/${apt.id}`} >
            <h2>{apt.name}</h2>
          </Link>
        </li>
      )
    })
    return (
      [
        <ul>
          {list}
        </ul>,
        <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
     ]
    );
  }
}

export default withAuth(AptIndex)
