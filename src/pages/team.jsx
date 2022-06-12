import Header from '../components/Header'
import Cards from '../components/Cards'

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

const Characters = () => {
  return (
    <>
      <Header />
      <Heading>Company Teams</Heading>
      <Cards />
    </>
  )
}

export default Characters

/*
import { useRouter } from 'next/router'

const Glasses = () => {
  const router = useRouter()

  console.log(router)

  return <h2>ID: {router.query.glasses}</h2>
}

export default Glasses
*/
