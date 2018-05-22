import React, { Component } from 'react'
import Apts from '../store/Apts'
import withAuth from './withAuth'
import {Link} from 'react-router-dom'

class AptDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apts: Apts
    }
  }


componentWillMount(){
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
      </div>
    );
  }
}

export default withAuth(AptDetail);
