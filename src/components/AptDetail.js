import React, { Component } from 'react'
import Apts from '../store/Apts'
import {Link} from 'react-router-dom'
import withAuth from './withAuth'
import AuthService from '../services/AuthService'


const Auth = new AuthService()

class AptDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apts: Apts
    }
  }

handleLogout(){ // <- Remove local storage, and redirect the user
      Auth.logout()
      this.props.history.replace('/login');
    }

componentWillMount(){
  console.log('index props', this.props);
    const id = this.props.match.params.id
    let apt = this.state.apts.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(apt) {
      this.setState({aptId: id, apt: apt})
    }
  }

  render() {
    let apt = this.state.apt
    return (

      <div>
        <Link to='/'>Home</Link>
        <h3>Neighborhood: {apt.name}</h3>
        <h3>Address 1: {apt.address1}</h3>
        <h3>Address 2: {apt.address2}</h3>
        <h3>City: {apt.city}</h3>
        <h3>State: {apt.state}</h3>
        <h3>Manager: {apt.manager}</h3>
        <h3>Phone: {apt.phone}</h3>
        <h3>Contact Hours: {apt.contacthours}</h3>
        <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default AptDetail
