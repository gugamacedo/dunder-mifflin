import styled from 'styled-components'

import Header from '../../components/Header'
import Cards from '../../components/Cards'

import loadCharacters from '../../lib/characters'

const Heading = styled.h1`
  margin: 30px 0;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 0.5px;

  @media (min-width: 2200px) {
    font-size: 2.2rem;
    margin: 40px;
  }

  @media (max-width: 425px) {
    font-size: 1.3rem;
    margin: 20px;
  }
`

export async function getStaticProps() {
  const characters = loadCharacters()

  return {
    props: {
      characters,
    },
  }
}

const Characters = ({ characters }) => {
  return (
    <>
      <Header title='Team' />
      <Heading>Our Team</Heading>
      <Cards characters={characters} />
    </>
  )
}

export default Characters
