import React, { Component } from 'react'
import './index.css'


export default class Item extends Component {
  state = {}

  render() {
    return (
      <li>
      <label>
        <input type="checkbox" />
        <span>xxxxxx</span>
        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
      </label>
    </li>
    )
  }
}