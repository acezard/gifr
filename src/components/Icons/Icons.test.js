import React from 'react'
import { shallow } from 'enzyme'
import Icons from './'

const component = shallow(<Icons />)

it('renders without crashing', () => {
  expect(component).toBeDefined()
})

it('has the correct css classes', () => {
  expect(component.hasClass('Icons')).toBe(true)
})

it('has a svg sprite sheet', () => {
  expect(component.find('svg').exists()).toBe(true)
})
