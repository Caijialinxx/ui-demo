import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../index'
import {mount} from 'enzyme'

describe('Icon', () => {
  it('传name', () => {
    const json = renderer.create(<Icon name="emoji-cool"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('传name、className', () => {
    const json = renderer.create(<Icon name="emoji-happy" className="icon"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="emoji-happy" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})