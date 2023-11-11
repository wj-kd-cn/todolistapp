import React, { Component } from 'react'
import './index.css'


export default class Item extends Component {

  //初始化mouse状态的值
  state = {mouse:false}

  //在指定事件回调的时候，传入参数，则返回必须是个函数
  handleMouse = (falg) =>{
    return () =>{
      this.setState({mouse:falg})
    }
  }

  //获取checkbox的勾选信息，并同步更新到状态中
  handleCheck = (sid) => {
    return (event) => {
      this.props.updateTodo(sid,event.target.checked)


    }
  }

  //删除任务，且判断未完成的任务不允许删除

  handleDelete = (sid,sdone) =>{
    console.log("delete: ",sid);
    if(window.confirm('确定要删除吗？')){
      if(sdone){
       this.props.deleteTodo(sid);
      }else{
     
        alert("任务未完成，不允许删除！")
      }
    }
    
 

  }


  render() {
    //console.log('@item: ',this);
    const {sid,sname,sdone} = this.props
    const {mouse} =  this.state
    return (
    <li style={{background:mouse ? '#ddd' :'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
      <label>
        {/* defaultChecked属性可支持默认别勾选，页面可更改 */}
        <input type="checkbox" defaultChecked={sdone} onChange={this.handleCheck(sid)} />
        <span>{sname}</span>
      </label>
      {/* 增加删除按钮的鼠标滑动显示*/}
      <button onClick={() =>{this.handleDelete(sid,sdone)}} className="btn btn-danger" style={{display:mouse ? 'block':'none'}}>删除</button>
    </li>
    )
  }
}