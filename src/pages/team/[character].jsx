import Image from 'next/image'

import loadCharacters from '../../lib/characters'

import Header from '../../components/Header'
import { Container, Card } from '../../styles/pages/character'

const Character = ({ character }) => {
  return (
    <>
      <Header title={character.name} />
      <Container>
        <Card>
          <div>
            <h1>{character.name}</h1>

            <Image
              src={character.image}
              alt={character.name}
              width={700}
              height={'100%'}
              quality={100}
            />
          </div>
          <div>
            <div>
              <strong>Occupation: </strong>
              {character.occupation}
            </div>
            <div>
              <strong>Portrayed by: </strong>
              {character.portrayed}
            </div>
            <div>
              <strong>Initial brand: </strong>
              {character.brand}
            </div>
            <div>
              <strong>First episode: </strong>
              {character.firstEp}
            </div>
            <div>
              <strong>Seasons: </strong>
              {character.seasons.map((item) => (
                <span key={item}>{item} | </span>
              ))}
            </div>
            <div>
              <strong>Aliases:</strong>
              <ul>
                {character.aliases.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {character.quotes.length !== 0 && (
              <div>
                <strong>Quotes:</strong>
                <ul>
                  {character.quotes.map((item, index) => (
                    <li key={index}>
                      <q>{item}</q>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <strong>Trivia: </strong>
              {character.trivia}
            </div>
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
