import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css';

export default class App extends Component {


  //设定初始化todo的选择项
  state = {todos:[
    {sid:'001',sname:'吃饭',sdone:true},
    {sid:'002',sname:'睡觉',sdone:true},
    {sid:'003',sname:'编码',sdone:false},
  ]}

  addTodo = (todo) =>{
    console.log('@nanoid: ',nanoid);


  } 
  


  render() {
    console.log('@app: ',this);
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos}/>
          <Footer />
        </div>
  
  
      </div>
    )

  }
}

