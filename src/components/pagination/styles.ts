import { styled } from 'styled-components'

export const Wrapper = styled.div`
  .pagination {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    width: 100%;
    margin-top: 32px;
    color: ${props => props.theme.colors.light};
    list-style: none;

    &-item {
      cursor: pointer;
      background-color: ${props => props.theme.colors.darkSecondary};
      border: 1px solid ${props => props.theme.colors.darkSecondary};
      border-radius: 4px;
      padding: 8px 16px;
      display: flex;
      align-items: center;
      transition: all 150ms ease-in-out;

      &:hover,
      &__active {
        background-color: ${props => props.theme.colors.dark};
      }

      &__disabled {
        opacity: 0.5;
        pointer-events: none;
        &:hover {
          cursor: not-allowed;
          background: none;
          border: none;
        }
      }
    }
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.theme.colors.light};
  }
`
