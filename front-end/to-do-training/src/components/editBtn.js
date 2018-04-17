import React, {Component} from 'react'
import { Link } from 'react-router-dom'


export default class EditButton extends Component {

  render() {
    return (
      <div>
        <Link to={{
          pathname: '/edit',
          state: { id: this.props.id }
        }}><button>Edit</button></Link>
      </div>
    )
  }
}