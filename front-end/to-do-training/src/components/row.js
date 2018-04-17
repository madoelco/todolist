import React from 'react'
import DeleteBtn from './deleteBtn'
import EditBtn from './editBtn'

export default function TableRow ({id, title, description}) {
  return <tr>
    <td> {title} </td>
    <td> {description} </td>
    <td> <DeleteBtn id={id}/></td>
    <td> <EditBtn id={id}/></td>
  </tr>
}