import Image from 'next/image'
import Link from 'next/link'

import { Card, CardsTeam, Container } from '../styles/components/cards'

const Cards = ({ characters }) => (
  <Container>
    <CardsTeam>
      {characters.map(
        (character, index) =>
          index < 8 && (
            <Card key={character.name}>
              <Image
                src={character.image}
                alt={character.name}
                width={700}
                height={'100%'}
                quality={100}
              />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name.replace(/\s+/g, '')} passHref>
                  <span>
                    <Image src={'/icons/book.svg'} alt={'More info'} width={40} height={40} />
                  </span>
                </Link>
              </div>
            </Card>
          )
      )}
    </CardsTeam>
    <CardsTeam>
      {characters.map(
        (character, index) =>
          index < 16 &&
          index >= 8 && (
            <Card key={character.name}>
              <Image
                src={character.image}
                alt={character.name}
                width={700}
                height={'100%'}
                quality={100}
              />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name.replace(/\s+/g, '')} passHref>
                  <span>
                    <Image src={'/icons/book.svg'} alt={'More info'} width={40} height={40} />
                  </span>
                </Link>
              </div>
            </Card>
          )
      )}
    </CardsTeam>
    <CardsTeam>
      {characters.map(
        (character, index) =>
          index < 24 &&
          index >= 16 && (
            <Card key={character.name}>
              <Image
                src={character.image}
                alt={character.name}
                width={700}
                height={'100%'}
                quality={100}
              />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name.replace(/\s+/g, '')} passHref>
                  <span>
                    <Image src={'/icons/book.svg'} alt={'More info'} width={40} height={40} />
                  </span>
                </Link>
              </div>
            </Card>
          )
      )}
    </CardsTeam>
    <CardsTeam>
      {characters.map(
        (character, index) =>
          index >= 24 && (
            <Card key={character.name}>
              <Image
                src={character.image}
                alt={character.name}
                width={700}
                height={'100%'}
                quality={100}
              />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name.replace(/\s+/g, '')} passHref>
                  <span>
                    <Image src={'/icons/book.svg'} alt={'More info'} width={40} height={40} />
                  </span>
                </Link>
              </div>
            </Card>
          )
      )}
    </CardsTeam>
  </Container>
)

export default Cards
