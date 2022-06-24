import loadCharacters from '../../lib/characters'

import Header from '../../components/Header'

const Character = ({ character }) => {
  return (
    <>
      <Header />
      <ul>
        <li>{character.name}</li>
        <li>{character.image}</li>
        <li>{character.seasons}</li>
        <li>{character.occupation}</li>
        <li>{character.aliases}</li>
        <li>{character.brands}</li>
        <li>{character.portrayed}</li>
        <li>{character.firstEp}</li>
        <li>{character.trivia}</li>
      </ul>
    </>
  )
}

export async function getStaticPaths() {
  const characters = loadCharacters()

  const paths = characters.map((item) => {
    return { params: { character: item.name } }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { character: name } = context.params

  const character = loadCharacters(name)

  return {
    props: {
      character,
    },
  }
}

export default Character
