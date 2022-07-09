import styled from 'styled-components'

const Heading = styled.h1`
  margin: 30px 0;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 0.5px;

  @media (min-width: 2200px) {
    font-size: 2.2rem;
    margin: 40px;
  }

  @media (max-width: 425px) {
    font-size: 1.3rem;
    margin: 20px;
  }
`

export default Heading