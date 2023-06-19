import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  position: relative;
  height: 48px;
  z-index: 100;
  position: sticky;
  top: 0;
  inset: 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.dark};
`

export const Logo = styled.img`
  height: 48px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`

export const NavItem = styled.button`
  display: flex;
  justify-self: flex-end;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.light};
  }
`
