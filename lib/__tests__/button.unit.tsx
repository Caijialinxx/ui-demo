import Button from '../button'
import renderer from 'react-test-renderer'
import React from 'react'

describe('button', () => {
  it('是个 div', () => {
    console.log(renderer)
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  })
})