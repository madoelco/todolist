import React, {Component} from 'react'

export default class DeleteButton extends Component {

  handleClick = () => {
    fetch(process.env.REACT_APP_BACK_SERVER +'/todolist/delete/'+this.props.id, {method: 'DELETE'}).then(window.location.reload())
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Delete
      </button>
    );
  }
}