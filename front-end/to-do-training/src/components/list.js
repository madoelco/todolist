import React, {Component} from 'react'
import TableComponent from './table'

export default class ListComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activities: []
    }
  }

  componentDidMount() {
    fetch('/todolist')
      .then(res => res.json())
      .then(activities => this.setState({activities: activities.result}));
  }

  render () {
    return (
      <div className="List">
        <h2>Activities</h2>
        <TableComponent activities={this.state.activities} />
      </div>
    )
  }
}