import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  border-radius: 20px 20px 20px 0;
  background-color: ${(props) => props.theme.colors.primary};
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 30px;
  padding: 50px 30px 30px;

  h1 {
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: 0.8px;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  > div:first-child span img {
    width: 100% !important;
    height: 450px !important;
    object-fit: cover;
    border-radius: 20px 20px 20px 0;
  }

  > div:last-child {
    background-color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.secondary};
    padding: 30px;
    font-size: 1rem;
    border-radius: 20px 20px 20px 0;

    strong {
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.1rem;
    }

    div {
      padding: 10px;
      margin: 30px 0;
      line-height: 20px;
      border: 2px solid ${(props) => props.theme.colors.tertiary};
      border-radius: 15px;
    }

    ul {
      max-height: 200px;
      overflow-y: scroll;

      ::-webkit-scrollbar {
        width: 7px;
        height: 100%;
      }

      ::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.colors.tertiary};
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 25px;
      }

      li {
        list-style-type: square;
        margin: 10px 0 20px 20px;
        line-height: 20px;
        padding: 0 20px 0 0;

        ::marker {
          color: ${(props) => props.theme.colors.primary};
          font-size: 1rem;
        }

        q {
          display: block;
          text-align: justify;
        }
      }

      li:last-child {
        margin-bottom: 0;
      }
    }

    div:first-child,
    div:last-child {
      margin: 0px;
    }

    div:last-child {
      text-align: justify;
    }
  }

  @media (min-width: 1900px) {
    width: 80%;
    padding: 50px;
    gap: 40px;

    h1 {
      font-size: 2.4rem;
      letter-spacing: 2px;
    }

    > div:first-child span img {
      height: 600px !important;
    }

    > div:last-child {
      padding: 40px;
      font-size: 1.7rem;

      strong {
        font-size: 1.8rem;
      }

      div {
        margin: 50px 0;
        line-height: 40px;
      }

      ul {
        max-height: 300px;

        ::-webkit-scrollbar {
          width: 10px;
        }

        li {
          margin: 20px 0 40px 40px;

          ::marker {
            font-size: 1.5rem;
          }
        }

        q {
          line-height: 40px;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 25px;
  }

  @media (max-width: 425px) {
    > div:last-child {
      padding: 20px;
    }

    h1 {
      font-size: 1.3rem;
    }

    > div:first-child span img {
      height: 300px !important;
    }
  }
`
