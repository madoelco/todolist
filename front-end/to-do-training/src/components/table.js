import React, {Component} from 'react'
import TableRow from './row'

export default class Table extends Component {

  render () {
    const {activities} = this.props
    return (<table>
      <thead>
        <tr>
          <th> Title </th>
          <th> Description </th>
        </tr>
      </thead>
      <tbody>
        {activities.map(a => <TableRow key={a._id} id={a._id} title={a.title} description={a.description} />)}
      </tbody>
    </table>)
  }
}
