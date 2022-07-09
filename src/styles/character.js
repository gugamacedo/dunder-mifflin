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

  > span img {
    width: 100% !important;
    height: 450px !important;
    object-fit: cover;
    border-radius: 20px 20px 20px 0;
  }

  > div {
    background-color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.secondary};
    padding: 20px;
    font-size: 1rem;
    border-radius: 20px 20px 20px 0;

    h1 {
      color: ${(props) => props.theme.colors.primary};
      font-family: ${(props) => props.theme.fonts.primary};
      letter-spacing: 0.5px;
      text-align: center;
      text-transform: uppercase;
      font-size: 1.6rem;
    }

    b {
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.1rem;
    }

    p {
      margin: 25px 0;
      line-height: 25px;
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
        margin: 10px 0 0 20px;

        ::marker {
          color: ${(props) => props.theme.colors.primary};
          font-size: 1rem;
        }
      }
    }

    p:last-child {
      margin: 0;
    }
  }

  @media (min-width: 1900px) {
    width: 80%;
    padding: 50px;
    gap: 40px;

    > span img {
      height: 600px !important;
    }

    > div {
      padding: 40px;
      font-size: 1.5rem;

      h1 {
        font-size: 2rem;
      }

      b {
        font-size: 1.6rem;
      }

      p {
        margin: 35px 0;
        line-height: 40px;
      }

      ul {
        max-height: 300px;

        ::-webkit-scrollbar {
          width: 10px;
        }

        li {
          margin: 20px 0 0 30px;

          ::marker {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 400px) {
    > span img {
      height: 350px !important;
    }
  }
`