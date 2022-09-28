import styled, { css } from 'styled-components'

function App () {
  return (
    <Title>
      App {' '}
      <Span>
        Texto do span
      </Span>
    </Title>
  )
}

const Span = styled.span`
  color: ${({theme}) => theme.colors.gray}
`

const Title = styled.h1`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary};
`}`

export { App }
