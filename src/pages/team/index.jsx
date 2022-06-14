import Header from '../../components/Header'
import Cards from '../../components/Cards'

import styled from 'styled-components'

const Heading = styled.h1`
  margin: 30px 0;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
`

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/characters/?name=')
  const characters = await res.json()

  return {
    props: {
      characters,
    },
  }
}

const Characters = ({ characters }) => {
  return (
    <>
      <Header />
      <Heading>Company Teams</Heading>
      <Cards characters={characters} />
    </>
  )
}

export default Characters
