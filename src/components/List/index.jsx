import React, { Component } from 'react'
import Item from '../Item'
import './index.css'



export default class List extends Component {

  
  render() {
    console.log('@list: ',this);
    const {todos} = this.props
    return (
    <ul className="todo-main">
      {
        todos.map( a =>{
          return <Item key={a.sid} sid={a.sid} sname={a.sname} sdone={a.sdone} />
        })
      }

     
    </ul>
    )
  }
}