import styled, { css } from 'styled-components'

export const Heading = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 5px;

  @media (min-width: 1900px) {
    padding: 10px;
  }
`

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      padding: 20px;
      text-decoration: none;
      color: ${(props) => props.theme.colors.secondary};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 1.2rem;

      :hover {
        background-color: #01213a;
      }
    }
  }

  button {
    display: none;
    border: none;
  }

  @media (min-width: 1900px) {
    nav {
      a {
        padding: 30px;
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 576px) {
    button {
      display: inline-block;
      background-color: inherit;
      z-index: 5;
      margin-right: 10px;
    }

    div img {
      height: 70px !important;
    }

    nav {
      position: absolute;
      height: 90%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 4;
      background-color: ${(props) => props.theme.colors.primary};
      flex-direction: column;
      justify-content: space-evenly;

      opacity: 0;
      pointer-events: none;
      transition: 0.7s;
      transform: translateY(70px);

      ${({ isMenuMobileToggle }) =>
        isMenuMobileToggle &&
        css`
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0px);

          height: 100vh;
        `}
    }
  }
`