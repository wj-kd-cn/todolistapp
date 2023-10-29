import React, { Component } from 'react'
import './index.css'


export default class Item extends Component {

  state = {mouse:false}

  //在指定事件回调的时候，传入参数，则返回必须是个函数

  handleMouse =(falg) =>{
    return () =>{
      this.setState({mouse:falg})
    }
  }
  render() {
    //console.log('@item: ',this);
    const {sname,sdone} = this.props
    const {mouse} =  this.state
    return (
    <li style={{background:mouse ? '#ddd' :'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
      <label>
        {/* defaultChecked属性可支持默认别勾选，页面可更改 */}
        <input type="checkbox" defaultChecked={sdone} />
        <span>{sname}</span>
      </label>
      <button className="btn btn-danger" style={{display:'none'}}>删除</button>
    </li>
    )
  }
}