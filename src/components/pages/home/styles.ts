import { styled } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
  color: ${props => props.theme.colors.light};
`
