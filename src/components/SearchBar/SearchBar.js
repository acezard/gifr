import React, { Component } from 'react'
import classNames from 'classnames'
import './SearchBar.css'

export class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      incorrectInput: false
    }
  }

  updateInput = e => {
    this.setState({value: e.target.value})
  }

  deleteInput = () => {
    this.setState({value: ''})
  }

  searchHandler = () => {
    if (this.state.value === '') {
      this.setState({ incorrectInput: true}, () => {
        window.setTimeout(() => {
          this.setState({ incorrectInput: false})
        }, 500)
      })
    }
  }

  render () {
    return (
      <div className={classNames({
          'SearchBar': true,
          'shake': this.state.incorrectInput})}>
        <svg
          className={classNames({
            'icon': true,
            'icon-search': true
          })}
          onClick={this.searchHandler}>
          <use xlinkHref='#icon-search'></use>
        </svg>

        <input
          type='text'
          value={this.state.value}
          onChange={this.updateInput}/>

          {this.state.value.length > 0 &&
            <svg
              className='icon icon-close'
              onClick={this.deleteInput}>
              <use xlinkHref='#icon-close'></use>
            </svg>
          }
      </div>
    )
  }
}

export default SearchBar
