import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  padding: 0 0 30px;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (min-width: 2200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 50px;
    width: 90%;
  }
`

export const CardsTeam = styled.section`
  border-radius: 20px 20px 20px 0;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (min-width: 2200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 425px) {
    padding: 20px;
    gap: 20px;
  }
`

export const Card = styled.div`
  position: sticky;
  top: 30px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 25px 25px 25px 0;
  background-color: ${(props) => props.theme.colors.secondary};

  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  > span img {
    width: 100% !important;
    height: 350px !important;
    object-fit: cover;
    border-radius: 20px 20px 20px 0;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.5px;

    > span img {
      cursor: pointer;
      height: 30px !important;
      animation: spin 1000ms 3 linear alternate;
    }
  }

  @media (min-width: 2200px) {
    > span img {
      height: 500px !important;
    }

    > div {
      padding: 15px 30px;
      font-size: 1.5rem;

      > span img {
        height: 50px !important;
      }
    }
  }

  @media (max-width: 700px) {
    > span img {
      height: 450px !important;
    }
  }

  @media (max-width: 425px) {
    > div {
      padding: 5px 20px;
      font-size: 0.9rem;
    }

    > span img {
      height: 275px !important;
    }
  }
`
