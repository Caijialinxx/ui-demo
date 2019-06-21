import {scopeClassMaker, flatten, groupBy} from '../index'

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

describe('测试flatten', () => {
  it('一维数组', () => {
    const result = flatten([1, 2])
    expect(result).toEqual([1, 2])
  })
  it('二维数组', () => {
    const result = flatten([1, [2]])
    expect(result).toEqual([1, 2])
  })
  it('三维数组', () => {
    const result = flatten([1, [[2]]])
    expect(result).toEqual([1, [2]])
  })
})


describe('测试groupBy', () => {
  it('一维数组', () => {
    const result = groupBy([1.1, 1.2, 2.4, 2.5], num => Math.floor(num))
    expect(result).toEqual({1: [1.1, 1.2], 2: [2.4, 2.5]})
  })
  it('二维数组', () => {
    const result = groupBy([[1, 'a'], [1, 'b'], [2, 'c']], item => item[0])
    expect(result).toEqual({1: ['a', 'b'], 2: ['c']})
  })
  it('不传iteratee', () => {
    const result = groupBy([1, 2])
    expect(result).toEqual({1: [1], 2: [2]})
  })
})