import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
         <Header />

  
          <ul className="todo-main">
            <li>
              <label>
                <input type="checkbox" />
                <span>xxxxxx</span>
                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>yyyyy</span>
                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
              </label>
            </li>
  
          </ul>
          <Footer />
  
        </div>
  
  
      </div>
    )

  }
}

