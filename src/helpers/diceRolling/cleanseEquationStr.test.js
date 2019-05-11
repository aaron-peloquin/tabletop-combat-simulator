import cleanseEquationStr from './cleanseEquationStr'

describe('cleanseEquationStr()', ()=>{
  let result
  let equation

  it('does not cleanse valid characters', () => {
    equation = '12d3+45d67-8d905*2/3'
    result = cleanseEquationStr(equation)
    expect(result).toBe(equation)
  })

  it('cleanses invalid characters', () => {
    equation = '1f8+3'
    result = cleanseEquationStr(equation)
    expect(result).toBe('18+3')
  })
})
