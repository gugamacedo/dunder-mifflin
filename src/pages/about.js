import Image from 'next/image'
import styled from 'styled-components'

import Header from '../components/Header'
import Slider from '../components/Slider'

const Container = styled.section`
  margin: 0 auto;
  padding: 0 0 30px;
  width: 90%;

  h1,
  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 400;
    text-align: center;
    margin: 25px 0;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
  }

  h2 {
    font-size: 1.3rem;
    margin: 60px 0 20px;
  }

  p {
    font-family: sans-serif;
    line-height: 1.5rem;
    font-size: 1.1rem;
    text-align: justify;
  }

  .historyImgWrapper {
    display: flex;
    justify-content: center;
    margin: 0px 0 20px !important;

    span img {
      border-radius: 25px;
      height: 450px !important;
    }
  }

  blockquote {
    border: 5px dashed ${(props) => props.theme.colors.primary};
    padding: 10px 40px;
    border-radius: 25px;

    ul li {
      font-family: sans-serif;
      line-height: 1.5rem;
      font-size: 1.1rem;
      text-align: justify;
      list-style-type: square;
      margin: 20px 0;

      ::marker {
        color: ${(props) => props.theme.colors.primary};
        font-size: 1.5rem;
      }
    }
  }

  .diversityGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.primary};
    gap: 10px;
    padding: 10px;

    span img {
      border-radius: 15px;
      height: 450px !important;
      object-fit: cover;
    }
  }

  @media (min-width: 1900px) {
    padding: 0 0 80px;

    h1 {
      margin: 30px 0 20px;
      font-size: 2rem;
    }

    h2 {
      font-size: 1.8rem;
      margin: 80px 0 20px;
    }

    p {
      line-height: 2.4rem;
      font-size: 1.6rem;
    }

    .historyImgWrapper {
      margin: 20px 0 40px !important;

      span img {
        height: 525px !important;
      }
    }

    blockquote {
      padding: 10px 60px;
      width: fit-content;

      ul li {
        line-height: 2.4rem;
        font-size: 1.6rem;
        margin: 30px 0;
      }
    }

    .diversityGrid {
      gap: 30px;
      padding: 30px;

      span img {
        height: 713px !important;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    .containerMobile {
      width: 85%;
      margin: 0 auto;
    }

    h1 {
      margin: 15px 0;
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1rem;
      margin: 40px 0 15px;
    }

    p {
      font-size: 0.9rem;
    }

    .historyImgWrapper {
      span img {
        height: 250px !important;
      }
    }

    blockquote {

      ul li {
        font-size: 0.9rem;
        margin: 10px 0;
      }
    }

    .diversityGrid {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;

      span img {
        height: 250px !important;
      }
    }
  }
`

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>About us</h1>
        <Slider />

        <div className="containerMobile">
          <h2>Our history</h2>
          <p>
            As stated by the founder Robert Dunder, the company was founded in 1949, and it was a
            supplier of metal brackets for construction. Dunder Mifflin Inc. (stock symbol DMI) is a
            mid-cap regional paper and office supply distributor with an emphasis on servicing
            small-business clients. With a corporate office in New York City, Dunder Mifflin has
            branches in Akron, Ohio; Nashua, New Hampshire; Rochester, New York; Scranton,
            Pennsylvania; Syracuse, New York; and Utica, New York
          </p>
          <br />

          <div className="historyImgWrapper">
            <Image
              src="/assets/office-location.png"
              alt="Office Location"
              width={728}
              height={526}
            />
          </div>

          <p>
            For years, Dunder Mifflin was a paper company that was unable to compete with modern
            chains such as Staples and Office Depot. The company still used calls rather than the
            Internet, causing most customers to leave for the nation-wide chains, and is unable to
            adapt to an increasingly paperless world. Ryan Howard, a new employee of the Scranton
            branch, predicts the company will be obsolete by 2017. In 2007, Ryan Howard became Vice
            President of Sales and begins a massive restructuring of the entire company, including a
            new website that would help make sales more efficient. However, his website was a
            failure (due to an ill-advised social networking feature) and he is later arrested for
            fraud when it is discovered that he is double-counting sales transactions into the
            website that were already made by salesmen over the phone.
          </p>
          <br />

          <div className="historyImgWrapper">
            <Image src="/assets/young-michael.jpg" alt="Young Michael" width={590} height={545} />
          </div>

          <h2>Mission statement</h2>
          <blockquote>
            <ul>
              <li>
                DUNDER MIFFLIN, Inc. is committed to providing its customers quality office and
                information technology products, furniture, printing values and the experience
                required for making informed buyer decisions.
              </li>
              <li>
                We provide our Customers with the highest standard of integrity and quality, to
                enable them to develop long-term professional relationships with our employees and
                staff.
              </li>
              <li>
                We crusade to create a stable working environment and corporate spirit and to give
                unlimited opportunity to women, and to afford ordinary folk the chance to buy the
                same things as rich people.
              </li>
              <li>
                We are also committed to nurturing and promulgating wholesome American values.
              </li>
              <li>
                We strive to become the company most known for changing the worldwide poor–quality
                image of Chinese products.
              </li>
            </ul>
          </blockquote>

          <h2>We respect diversity!</h2>
          <div className="diversityGrid">
            <Image src="/assets/doc-king.jpg" alt="Card Luther King" width={855} height={720} />
            <Image src="/assets/doll.jpg" alt="Doll" width={1280} height={720} />
            <Image src="/assets/blind-michael.png" alt="Blind Michael" width={731} height={713} />
            <Image src="/assets/fat-michael.jpg" alt="Fat Michael" width={719} height={720} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
