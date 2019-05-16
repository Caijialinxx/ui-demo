import joinClasses from '../joinClasses'

describe('测试组合多个className', () => {
  it('传一个参', () => {
    const result = joinClasses('aaa')
    expect(result).toEqual('aaa')
  })
  it('传两个参', () => {
    const result = joinClasses('aaa', 'bbb')
    expect(result).toEqual('aaa bbb')
  })
  it('传各种奇怪的参数', () => {
    const result = joinClasses('aaa', '中文', false, null, undefined, true)
    expect(result).toEqual('aaa 中文 true')
  })
  it('不传参', () => {
    const result = joinClasses()
    expect(result).toEqual('')
  })
})