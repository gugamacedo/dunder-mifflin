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
`

const CardsTeam = styled.section`
  border-radius: 20px 20px 20px 0;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`

const Card = styled.div`
  position: sticky;
  top: 30px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 25px 25px 25px 0;
  background-color: white;

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
    padding: 5px 15px;
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.5px;

    > div {
      display: flex;
      gap: 5px;
      cursor: pointer;
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
              <Image src={character.image} alt={character.name} width={700} height={"100%"} />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name} passHref>
                  <div>
                    <Image src={'/icons/book.svg'} alt={'More info'} width={30} height={30} />
                    <Image src={'/icons/search.svg'} alt={'More info'} width={25} height={25} />
                  </div>
                </Link>
              </div>
            </Card>
          )
      )}
    </CardsTeam>
    <CardsTeam>
      {characters.map(
        (character, index) =>
          index < 16 && index >= 8 &&  (
            <Card key={character.name}>
              <Image src={character.image} alt={character.name} width={700} height={"100%"} />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name} passHref>
                  <div>
                    <Image src={'/icons/book.svg'} alt={'More info'} width={30} height={30} />
                    <Image src={'/icons/search.svg'} alt={'More info'} width={25} height={25} />
                  </div>
                </Link>
              </div>
            </Card>
          )
      )}
    </CardsTeam>
    <CardsTeam>
      {characters.map(
        (character, index) =>
          index < 24 && index >= 16 && (
            <Card key={character.name}>
              <Image src={character.image} alt={character.name} width={700} height={"100%"} />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name} passHref>
                  <div>
                    <Image src={'/icons/book.svg'} alt={'More info'} width={30} height={30} />
                    <Image src={'/icons/search.svg'} alt={'More info'} width={25} height={25} />
                  </div>
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
              <Image src={character.image} alt={character.name} width={700} height={"100%"} />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name} passHref>
                  <div>
                    <Image src={'/icons/book.svg'} alt={'More info'} width={30} height={30} />
                    <Image src={'/icons/search.svg'} alt={'More info'} width={25} height={25} />
                  </div>
                </Link>
              </div>
            </Card>
          )
      )}
    </CardsTeam>
  </Container>
)

export default Cards
