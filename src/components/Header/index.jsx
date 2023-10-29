import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'
//第三方库引入优先import，自己的库稍后import,css最后import

export default class Header extends Component {

  handKeyUp = (event)=>{
    //解构赋值获取keycode,target
    const {keyCode,target} = event
    //判断是否回车键
    if(keyCode !== 13) return
    //添加的todo名字不能为空
    if(target.value.trim() === ''){
      alert('输入不能为空！')
      return
    }
    const todoObj = {sid:nanoid(),sname:target.value,sdone:false}
    this.props.addTodo(todoObj)
    target.value = ''

  }
 

  render() {
    console.log('@header: ',this);
    return (
    <div className="todo-header">
      <input type="text" onKeyUp={this.handKeyUp} placeholder="请输入你的任务名称，按回车确认"/>
    </div>
    )
  }
}