import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  font-family: ${(props) => props.theme.fonts.secondary};
  padding: 0 0 50px;
  overflow-x: hidden;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: 0.5px;
    text-transform: uppercase;

    h1 {
      margin: 30px 0;
      font-size: 1.4rem;
    }

    > span img {
      border-radius: 25px;
      height: 450px !important;
    }

    figcaption {
      padding: 10px 0;
      font-size: 0.8rem;

      span img {
        border-radius: 50%;
        height: 50px !important;
      }
    }
  }

  @media (min-width: 1900px) {
    > div {
      h1 {
        margin: 40px 0;
        font-size: 1.8rem;
      }

      > span img {
        height: 585px !important;
      }

      figcaption {
        font-size: 1.1rem;

        span img {
          height: 60px !important;
        }
      }
    }
  }
  @media (max-width: 576px) {
    > div {
      h1 {
        margin: 25px 0;
        font-size: 1.2rem;
      }

      > span img {
        height: 200px !important;
      }

      figcaption {
        padding: 5px 0;
        font-size: 0.7rem;

        span img {
          height: 30px !important;
        }
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 25px;
  margin-top: 30px;
  padding: 0 30px;

  legend {
    font-weight: bold;
    margin: 30px 0;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select,
  textarea,
  button {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border-style: none;
    outline: none;
    font-family: ${(props) => props.theme.fonts.secondary};
    background-color: ${(props) => props.theme.colors.secondary};
  }

  textarea {
    height: 100px;
  }

  option {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  span {
    font-size: 0.7rem;
    display: inline-block;
    margin-top: 5px;
    padding: 5px;
    background-color: rgba(255, 0, 0, 0.5);
  }

  button {
    width: 70px;
    margin: 30px 0;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: 1px;
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
  }

  @media (min-width: 1900px) {
    margin-top: 60px;
    padding: 0 50px;

    legend {
      margin: 40px 0;
      font-size: 1.8rem;
    }

    input,
    select,
    textarea,
    button,
    label {
      font-size: 1.4rem;
    }

    option {
      font-size: 0.9rem;
    }

    button {
      width: 150px;
      margin: 50px 0;
    }
  }

  @media (max-width: 576px) {
    legend {
      margin: 30px 0 20px;
      font-size: 1.1rem;
    }

    label {
      font-size: 0.9rem;
    }

    button {
      width: 55px;
      font-size: 0.9rem;
    }
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const Toasty = styled.div`
  position: fixed;
  right: ${({ isToasty }) => (isToasty.open ? '100px' : '-110vw')};
  bottom: 50px;
  font-family: ${(props) => props.theme.fonts.secondary};
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 10px;
  padding: 10px;
  transition: all 700ms ease-in-out;
  max-width: 400px;
  padding: 20px;

  h4 {
    text-align: center;
    text-transform: uppercase;
  }

  p {
    margin: 10px 0;
    word-break: break-all;
  }

  b {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: 1900px) {
    max-width: 900px;

    h4,
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 576px) {
    right: ${({ isToasty }) => (isToasty.open ? '0' : '-110vw')};
    max-width: 250px;

    h4,
    p {
      font-size: 0.9rem;
    }
  }
`