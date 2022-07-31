import Header from '../../components/Header'
import Cards from '../../components/Cards'
import Heading from '../../styles/pages/team'

import loadCharacters from '../../lib/characters'

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
