import React, { Component } from 'react'
import './index.css'


export default class Item extends Component {

  render() {
    console.log(this);
    return (
    <li>
      <label>
        <input type="checkbox" />
        <span>xxxxxx</span>
      </label>
      <button className="btn btn-danger" >删除</button>
    </li>
    )
  }
}