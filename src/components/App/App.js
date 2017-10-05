import React, { Component } from 'react'
import SearchModule from '../../containers/SearchModule'
import Icons from '../Icons'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Icons />
        <SearchModule />
      </div>
    )
  }
}

export default App
