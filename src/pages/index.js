import styled from 'styled-components'

import Header from '../components/Header'

import bgImage from '../assets/team.jpg'

const Home = styled.main`
  background-image: url(${bgImage.src}); // / essa bagaça é um objeto
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: top;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  h2 {
    padding: 2rem 2rem 0;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 2rem;
    text-shadow: -1px -1px 10px ${(props) => props.theme.colors.primary},
      -1px 1px 10px ${(props) => props.theme.colors.primary},
      1px -1px 10px ${(props) => props.theme.colors.primary},
      1px 1px 10px ${(props) => props.theme.colors.primary};
    letter-spacing: 0.25rem;
  }

  @media (max-width: 576px) {
    background-position: center;
    justify-content: space-between;

    h2 {
      font-size: 1.4rem;
      padding: 0 2rem 2rem;
    }
  }
`

const Index = () => {
  return (
    <Home>
      <Header />
      <h2>Limitless paper in a paper World</h2>
    </Home>
  )
}

export default Index
