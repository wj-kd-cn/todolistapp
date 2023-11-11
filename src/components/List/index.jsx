import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'



export default class List extends Component {

    //对接收的props进行：类型，必要性的限制
    static propTypes = {
      updateTodo:PropTypes.func.isRequired,
      todos:PropTypes.array.isRequired
      
    }

  
  render() {
    console.log('@list: ',this);
    const {todos,updateTodo} = this.props
    return (
    <ul className="todo-main">
      {
        todos.map( a =>{
          return <Item key={a.sid} sid={a.sid} sname={a.sname} sdone={a.sdone} updateTodo={updateTodo}/>
        })
      }

     
    </ul>
    )
  }
}