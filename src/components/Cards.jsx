import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.section`
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

const CardsTeam = styled.section`
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

const Card = styled.div`
  position: sticky;
  top: 30px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 25px 25px 25px 0;
  background-color: ${(props) => props.theme.colors.secondary};

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
