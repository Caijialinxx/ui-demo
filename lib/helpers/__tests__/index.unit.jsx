import {scopeClassMaker} from '../index';

describe('测试scopeClassMaker', () => {
  it('传空字符串', () => {
    const result = scopeClassMaker('prefix')('')
    expect(result).toEqual('prefix')
  })
  it('传第一个参数', () => {
    const result = scopeClassMaker('prefix')('suffix')
    expect(result).toEqual('prefix-suffix')
  })
  it('传两个参数，并且第二个为一个空字符串', () => {
    const result = scopeClassMaker('')('', '')
    expect(result).toEqual('')
  })
  it('传两个参数，并且第二个为一个非空字符串', () => {
    const result = scopeClassMaker('')('', 'aaa')
    expect(result).toEqual('aaa')
  })
  it('传三个参数', () => {
    const result = scopeClassMaker('')('', 'aaa', 'bbb')
    expect(result).toEqual('aaa bbb')
  })
  it('传各种奇怪的值', () => {
    const result = scopeClassMaker('')('', false, undefined, null, true)
    expect(result).toEqual('true')
  })
})