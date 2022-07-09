import Image from 'next/image'

import loadCharacters from '../../lib/characters'

import Header from '../../components/Header'
import { Container, Card } from '../../styles/character'

const Character = ({ character }) => {
  return (
    <>
      <Header title={character.name} />
      <Container>
        <Card>
          <Image
            src={character.image}
            alt={character.name}
            width={700}
            height={'100%'}
            quality={100}
          />
          <div>
            <h1>{character.name}</h1>
            <p>
              <b>Occupation: </b>
              {character.occupation}
            </p>
            <p>
              <b>Portrayed by: </b>
              {character.portrayed}
            </p>
            <p>
              <b>Initial brand: </b>
              {character.brand}
            </p>
            <b>Aliases:</b>
            <ul>
              {character.aliases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <b>First episode: </b>
              {character.firstEp}
            </p>
            <p>
              <b>Seasons: </b>
              {character.seasons.map((item) => (
                <span key={item}>{item} | </span>
              ))}
            </p>
            <p>
              <b>Trivia: </b>
              {character.trivia}
            </p>
          </div>
        </Card>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const characters = loadCharacters()

  const paths = characters.map((item) => {
    return { params: { character: item.name.replace(/\s+/g, '') } }
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
