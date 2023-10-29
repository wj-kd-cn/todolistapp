import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css';

export default class App extends Component {


  //设定初始化todo的选择项
  state = {todos:[
    {sid:nanoid(),sname:'吃饭',sdone:true},
    {sid:nanoid(),sname:'睡觉',sdone:true},
    {sid:nanoid(),sname:'编码',sdone:false},
  ]}

  //状态在哪里，操作状态的函数就在哪里



  addTodo = (todo) =>{
    //console.log('@addTodo: ',todo);
    const {todos} = this.state
    const newTodos = [todo,...todos]
    this.setState({todos:newTodos})
  } 

  updateTodo = (sid,sdone) => {
    const {todos} = this.state
    const newtodos = todos.map((todo) =>{
      if(todo.sid === sid) return {...todo,sdone}
      else return todo
    })

    this.setState({todos:newtodos})

  }



  render() {
    console.log('@app: ',this);
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 子组件向父组件传递数据，可调用父组件的一个函数 */}
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo}/>
          <Footer todos={todos}/>
        </div>
  
  
      </div>
    )

  }
}

