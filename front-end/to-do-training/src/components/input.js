import React, {Component} from 'react'

export default class InputComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
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
    
    fetch(process.env.REACT_APP_BACK_SERVER +'/todolist', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(window.location.reload())
  }

  render () {
    return (
      <div>
          <p><b> Add a new activity: </b></p>
          Title: <input onChange={this.inputTitleOnChange} /> 
          Description: <input onChange={this.inputDescriptionOnChange} /> 
          <button onClick={this.handleClick}> Add </button>
          <br />
      </div>
    )
  }
}
