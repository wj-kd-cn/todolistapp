import React, { Component } from 'react'
import './index.css'


export default class Item extends Component {

  render() {
    console.log('@item: ',this);
    const {sname} = this.props
    return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{sname}</span>
      </label>
      <button className="btn btn-danger" >删除</button>
    </li>
    )
  }
}