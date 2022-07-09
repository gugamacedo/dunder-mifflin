import Image from 'next/image'

import Header from '../components/Header'
import Slider from '../components/Slider'
import { Container, HistoryImgWrapper, DiversityGrid } from '../styles/about'

export async function getStaticProps() {
  const slides = [
    {
      path: '/slides/6.jpg',
      alt: 'Kill Michael',
      width: 1360,
      height: 720,
    },
    {
      path: '/slides/4.jpg',
      alt: 'Jim and Dwight',
      width: 1360,
      height: 720,
    },
    {
      path: '/slides/3.jpg',
      alt: 'Michael Tots',
      width: 1304,
      height: 720,
    },
    {
      path: '/slides/2.jpg',
      alt: 'Michael Scott and Jim Halpert',
      width: 1318,
      height: 720,
    },
    {
      path: '/slides/1.jpg',
      alt: 'Christimas',
      width: 1335,
      height: 720,
    },
    {
      path: '/slides/5.jpg',
      alt: 'Daryl and others',
      width: 1280,
      height: 720,
    },
  ]

  const images = [
    {
      src: '/assets/office-location.png',
      alt: 'Office Location',
      width: '728',
      height: '526',
    },
    {
      src: '/assets/young-michael.jpg',
      alt: 'Young Michael',
      width: '590',
      height: '545',
    },
    {
      src: '/assets/doc-king.jpg',
      alt: 'Card Luther King',
      width: '855',
      height: '720',
    },
    {
      src: '/assets/doll.jpg',
      alt: 'Doll',
      width: '1280',
      height: '720',
    },
    {
      src: '/assets/blind-michael.png',
      alt: 'Blind Michael',
      width: '713',
      height: '720',
    },
    {
      src: '/assets/fat-michael.jpg',
      alt: 'Fat Michael',
      width: '719',
      height: '720',
    },
  ]

  return {
    props: {
      slides,
      images,
    },
  }
}

const About = ({ slides, images }) => {
  return (
    <>
      <Header title="About" />
      <Container>
        <h1>About us</h1>
        <Slider slides={slides} />

        <div>
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

          <HistoryImgWrapper>
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
            />
          </HistoryImgWrapper>

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

          <HistoryImgWrapper>
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={images[1].width}
              height={images[1].height}
            />
          </HistoryImgWrapper>

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
          <DiversityGrid>
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={images[2].width}
              height={images[2].height}
            />
            <Image
              src={images[3].src}
              alt={images[3].alt}
              width={images[3].width}
              height={images[3].height}
            />
            <Image
              src={images[4].src}
              alt={images[4].alt}
              width={images[4].width}
              height={images[4].height}
            />
            <Image
              src={images[5].src}
              alt={images[5].alt}
              width={images[5].width}
              height={images[5].height}
            />
          </DiversityGrid>
        </div>
      </Container>
    </>
  )
}

export default About
