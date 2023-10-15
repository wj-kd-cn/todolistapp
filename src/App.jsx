import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
         <Header />
         <List />
         <Footer />
  
        </div>
  
  
      </div>
    )

  }
}

