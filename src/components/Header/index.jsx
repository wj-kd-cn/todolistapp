import React, { Component } from 'react'
import './index.css'


export default class Header extends Component {
  state = {}

  render() {
    return (
      <div className="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车确认"/>
    </div>
    )
  }
}