import React, { Component } from 'react'
import Apts from '../store/Apts'
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
        <h3>{apt.name}</h3>
        <h3>{apt.address1}</h3>
        <h3>{apt.address2}</h3>
        <h3>{apt.city}</h3>
        <h3>{apt.state}</h3>
        <h3>{apt.manager}</h3>
        <h3>{apt.phone}</h3>
        <h3>{apt.contacthours}</h3>

      </div>
    );
  }
}

export default AptDetail;
