import React from 'react'
import ReactDOM from 'react-dom'
import { SearchBar } from './SearchBar'
import { shallow } from 'enzyme'

describe('<SearchBar />', () => {
  let component
  beforeEach(() => {
    component = shallow(<SearchBar />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchBar />, div)
  })

  it('has the correct css class', () => {
    expect(component.hasClass('SearchBar')).toBe(true)
  })

  it('shows a close icon after type', () => {
    const input = component.find('input')
    input.simulate('change', { target: { value: 'a' } })
    expect(component.find('.icon-close').exists()).toBe(true)
  })

  it('resets after click on icon', () => {
    const input = component.find('input')
    input.simulate('change', { target: { value: 'foo' } })
    component.find('.icon-close').simulate('click')
    expect(input.props().value).toBe('')
  })
})
