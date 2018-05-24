import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import '../css/App.css';
import AptIndex from './AptIndex'
import AptDetail from './AptDetail'
import { getApts } from '../api'
import Login from './Login';
import AuthService from '../services/AuthService'
import { FormControl } from 'react-bootstrap';
import { Redirect }  from 'react-router-dom';




class NewApts extends Component {
constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      address1: '',
      address2: '',
      city:'',
      state:'',
      manager:'',
      phone:'',
      contacthours:''
    }
  }
}

handleChange(event){
  let {form } = this.state
  form[event.target.name] = event.target.value
  this.setState({form: form})
}

handleSubmit(event) {
  event.preventDefault()
  this.props.handleApt(this.state.form)
}

render() {
      return (
    <div>
      <form>
        <FormControl
        type="text"
        name="name"
        placeholder="Apartment Name"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.name}
        />
        <FormControl
        type="text"
        name="address1"
        placeholder="address1"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.address1}
        />
        <FormControl
        type="text"
        name="address2"
        placeholder="address2"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.address2}
        />
        <FormControl
        type="text"
        name="city"
        placeholder="city"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.city}
        />
        <FormControl
        type="text"
        name="state"
        placeholder="state"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.state}
        />
        <FormControl
        type="text"
        name="manager"
        placeholder="manager"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.manager}
        />
        <FormControl
        type="text"
        name="phone"
        placeholder="phone"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.phone}
        />
        <FormControl
        type="text"
        placeholder="contacthours"
        name="contacthours"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.contacthours}
        />

        <FormControl
        type="submit"
        name="create apt"
        onClick={this.handleSubmit.bind(this)}
        />

        </form>

       {this.props.success &&
       <Redirect to="/" />
       }
       </div>
      )
    }
  }

export default NewApts
