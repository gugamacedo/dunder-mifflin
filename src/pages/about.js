import styled from 'styled-components'
import Image from 'next/image'

import Header from '../components/Header'

import michael from '../assets/boss.jpg'
import jimDwight from '../assets/dwight-jim.png'

const Container = styled.section`
  margin: 0 auto;
  width: 90%;
`

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>About us</h1>

        <h2>History</h2>
        <p>
          As stated by the founder Robert Dunder, the company was founded in 1949, and it was a
          supplier of metal brackets for construction. Dunder Mifflin Inc. (stock symbol DMI) is a
          mid-cap regional paper and office supply distributor with an emphasis on servicing
          small-business clients. With a corporate office in New York City, Dunder Mifflin has
          branches in Akron, Ohio; Nashua, New Hampshire; Rochester, New York; Scranton,
          Pennsylvania; Syracuse, New York; and Utica, New York
        </p>
        <br />

        <p>
          For years, Dunder Mifflin was a paper company that was unable to compete with modern
          chains such as Staples and Office Depot. The company still used calls rather than the
          Internet, causing most customers to leave for the nation-wide chains, and is unable to
          adapt to an increasingly paperless world. Ryan Howard, a new employee of the Scranton
          branch, predicts the company will be obsolete by 2017. In 2007, Ryan Howard became Vice
          President of Sales and begins a massive restructuring of the entire company, including a
          new website that would help make sales more efficient. However, his website was a failure
          (due to an ill-advised social networking feature) and he is later arrested for fraud when
          it is discovered that he is double-counting sales transactions into the website that were
          already made by salesmen over the phone.
        </p>
        <br />

        <h2>Location</h2>
        <p>
          The office is located in the Scranton Business Park, occupying the same building as Vance
          Refrigeration. Sales, Accounting, Human Resources, and Customer Service all occupy the
          same office space, and Warehousing and shipping space is apparently located in a different
          part of the same building. Managerial Structure is set up with a Regional Manager in
          charge of all operations within the same building, with an Assistant Manager directly
          below him (although this does not seem to be the case in all branches). A warehouse
          manager runs all shipping and warehousing operations in a warehouse.
        </p>
        <br />

        <h2>Competitors</h2>
        <ul>
          <li>Staples</li>
          <li>Office Depot</li>
          <li>PPC</li>
          <li>Pendelton</li>
          <li>Catalyst Paper</li>
          <li>Prince Paper</li>
          <li>Osprey Paper</li>
          <li>Big Red Paper Company</li>
          <li>
            <b>The Michael Scott Paper Company</b>
          </li>
        </ul>
        <br />

        <h2>Mission statement</h2>
        <p>
          DUNDER MIFFLIN, Inc. is committed to providing its customers quality office and
          information technology products, furniture, printing values and the experience required
          for making informed buyer decisions.
        </p>
        <p>
          We provide our Customers with the highest standard of integrity and quality, to enable
          them to develop long-term professional relationships with our employees and staff.
        </p>
        <p>
          We crusade to create a stable working environment and corporate spirit and to give
          unlimited opportunity to women, and to afford ordinary folk the chance to buy the same
          things as rich people.
        </p>
        <p>We are also committed to nurturing and promulgating wholesome American values.</p>
        <p>
          We strive to become the company most known for changing the worldwide poor–quality image
          of Chinese products.
        </p>
        <div>
          <Image src={michael} alt="Young Michael" width={590} height={550} quality={100} />
          <Image src={jimDwight} alt="Young Jim/Dwight" width={600} height={300} quality={100} />
        </div>
      </Container>
    </>
  )
}

export default About
