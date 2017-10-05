import React, { Component} from 'react'
import PropTypes from 'prop-types'
import SearchTitle from '../../components/SearchTitle'
import SearchBar from '../../components/SearchBar'
import './SearchModule.css'

export class SearchModule extends Component {
  render () {
    return (
      <div className='SearchModule'>
        <SearchTitle />
        <SearchBar />
      </div>
    )
  }
}

SearchModule.propTypes = {
  currentSearch: PropTypes.string
}

export default SearchModule
