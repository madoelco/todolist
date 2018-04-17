import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'


class Edit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.location.state.id,
      activity: {},
      title: '',
      description: ''
    }
  }

  componentDidMount() {
    fetch('/todolist/'+this.state.id)
      .then(res => res.json())
      .then(activity => {
        this.setState({activity: activity})
        this.setState({title: activity.title})
        this.setState({description: activity.description})
      })
  }

  inputTitleOnChange = (evt) => {
    this.setState({
      title: evt.target.value
    })
  }

  inputDescriptionOnChange = (evt) => {
    this.setState({
      description: evt.target.value
    })
  }

  handleClick = () => {
    this.setState({
      name: this.state.name,
      description: this.state.description
    })

    fetch('/todolist/'+this.state.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title: this.state.title, description: this.state.description})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Edit</h1>
        </header>
        <h3> Edit your activity: </h3>
        Title: <input value={this.state.title} onChange={this.inputTitleOnChange} /> 
        Description: <input value={this.state.description} onChange={this.inputDescriptionOnChange} /> 
        <Link to='/'><button onClick={this.handleClick}> Update </button></Link>
      </div>
    )
  }
}

export default Edit;