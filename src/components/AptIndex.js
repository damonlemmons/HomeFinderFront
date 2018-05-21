import React, { Component } from 'react'
import Apts from '../store/Apts'
import {Link} from 'react-router-dom'

class AptIndex extends Component {
  componentWillMount(){
    this.setState({apts: Apts})
  }
  render() {
    let list = this.state.apts.map(function(apt){
      return(
        <li key={apt.id}>
          <Link to={`/Apts/${apt.id}`} >
            {apt.name}
          </Link>
        </li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default AptIndex;
