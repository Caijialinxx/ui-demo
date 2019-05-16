import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../index'

describe('Icon', () => {
  it('传name', () => {
    const json = renderer.create(<Icon name="emoji-cool"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('传name、className', () => {
    const json = renderer.create(<Icon name="emoji-happy" className="icon"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('传name、className、事件', () => {
    const json = renderer.create(<Icon name="emoji-happy" className="icon" onClick={() => console.log(1)}/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})