import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.section`
  margin: 0 auto;
  padding: 0 0 30px;
  width: 90%;
  display: flex;
  gap: 30px;
`

const CardsTeam = styled.section`
  border-radius: 25px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  h2 {
    position: sticky;
    top: 15px;
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }
`

const Card = styled.div`
  position: sticky;
  top: 60px;
  margin-bottom: 32px;
  width: 100%;
  border-radius: 15px;
  background-color: white;

  > span img {
    width: 100% !important;
    border-radius: 10px;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: bold;
    font-size: 0.9rem;
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
      <h2>Account</h2>
      {characters.map(
        (character) =>
          character.team === 'account' && (
            <Card key={character.name}>
              <Image src={character.image} alt={character.name} width={550} height={505} />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name.replace(' ', '')} passHref>
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
      <h2>Sales</h2>
      {characters.map(
        (character) =>
          character.team === 'sales' && (
            <Card key={character.name}>
              <Image src={character.image} alt={character.name} width={550} height={505} />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name.replace(' ', '')} passHref>
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
      <h2>Human Resources</h2>
      {characters.map(
        (character) =>
          character.team === 'hr' && (
            <Card key={character.name}>
              <Image src={character.image} alt={character.name} width={550} height={505} />
              <div>
                <h3>{character.name}</h3>
                <Link href={'/team/' + character.name.replace(' ', '')} passHref>
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
