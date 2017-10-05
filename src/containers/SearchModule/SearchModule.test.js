import React from 'react'
import { SearchModule } from './SearchModule'
import { shallow } from 'enzyme'

const component = shallow(<SearchModule />)

it('renders without crashing', () => {
  expect(component).toBeDefined()
})

it('has the correct class name', () => {
  expect(component.hasClass('SearchModule')).toBe(true)
})
