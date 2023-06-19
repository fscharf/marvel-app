import { styled } from 'styled-components'

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  background: ${props => props.theme.colors.dark};
  height: 48px;
  transition: transform 300ms ease-in-out;
  z-index: -1;
  transform: ${props =>
    props.isOpen ? 'translateY(100%)' : 'translateY(-100%)'};
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 24px;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.darkSecondary};
`

export const ClearButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.light};
  }
`
