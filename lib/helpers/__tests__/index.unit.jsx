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
    const result = scopeClassMaker('prefix')('suffix', '')
    expect(result).toEqual('prefix-suffix')
  })
  it('传两个参数，并且第二个为一个非字符串', () => {
    const result = scopeClassMaker('prefix')('suffix', 'aaa')
    expect(result).toEqual('prefix-suffix aaa')
  })
  it('传两个参数，并且第二个为一个数组', () => {
    const result = scopeClassMaker('prefix')('suffix', ['aaa', 'bbb'])
    expect(result).toEqual('prefix-suffix aaa bbb')
  })
  it('传两个参数，并且第二个为一个falsy值', () => {
    const result = scopeClassMaker('prefix')('suffix', false)
    expect(result).toEqual('prefix-suffix')
  })
  it('传n个参数，并且第二个为一个falsy值', () => {
    const result = scopeClassMaker('prefix')('suffix', 'aaa', 'bbb')
    expect(result).toEqual('prefix-suffix aaa')
  })
})