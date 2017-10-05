import React from 'react'
import ReactDOM from 'react-dom'
import { SearchTitle } from './App'
import { shallow } from 'enzyme'

const component = shallow(<SearchTitle />)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchTitle />, div)
})

it('has the correct css class', () => {
  expect(component.hasClass('SearchTitle')).toBe(true)
})
