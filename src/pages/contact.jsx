import { Formik } from 'formik'
import * as yup from 'yup'

import Image from 'next/image'
import styled from 'styled-components'

import Header from '../components/Header'
import { useState } from 'react'

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  font-family: ${(props) => props.theme.fonts.secondary};
  padding: 0 0 50px;
  overflow-x: hidden;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};

    h1 {
      margin: 30px 0;
      font-size: 1.4rem;
    }

    > span img {
      border-radius: 25px;
      height: 450px !important;
    }

    figcaption {
      padding: 10px 0;
      font-size: 0.9rem;

      span img {
        border-radius: 50%;
        height: 50px !important;
      }
    }
  }

  @media (min-width: 1900px) {
    > div {
      h1 {
        margin: 40px 0;
        font-size: 1.8rem;
      }

      > span img {
        height: 585px !important;
      }

      figcaption {
        font-size: 1.1rem;

        span img {
          height: 60px !important;
        }
      }
    }
  }
  @media (max-width: 576px) {
    > div {
      h1 {
        margin: 25px 0;
        font-size: 1.2rem;
      }

      > span img {
        height: 250px !important;
      }

      figcaption {
        padding: 5px 0;
        font-size: 0.7rem;

        span img {
          height: 30px !important;
        }
      }
    }
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 25px;
  margin-top: 30px;
  padding: 0 30px;

  legend {
    font-weight: bold;
    margin: 30px 0;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select,
  textarea,
  button {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border-style: none;
    outline: none;
    font-family: ${(props) => props.theme.fonts.secondary};
    background-color: ${(props) => props.theme.colors.secondary};
  }

  textarea {
    height: 100px;
  }

  option {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  span {
    font-size: 0.7rem;
    display: inline-block;
    margin-top: 5px;
    padding: 5px;
    background-color: rgba(255, 0, 0, 0.5);
  }

  button {
    width: 70px;
    margin: 30px 0;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: 1px;
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  @media (min-width: 1900px) {
    margin-top: 60px;
    padding: 0 50px;

    legend {
      margin: 40px 0;
      font-size: 1.8rem;
    }

    input,
    select,
    textarea,
    button,
    label {
      font-size: 1.4rem;
    }

    option {
      font-size: 0.9rem;
    }

    button {
      width: 150px;
      margin: 50px 0;
    }
  }

  @media (max-width: 576px) {
    legend {
      margin: 30px 0 20px;
      font-size: 1.1rem;
    }

    label {
      font-size: 0.9rem;
    }

    button {
      width: 55px;
      font-size: 0.9rem;
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const Toasty = styled.div`
  position: fixed;
  right: ${({ isToasty }) => (isToasty.open ? '100px' : '-110vw')};
  bottom: 50px;
  font-family: ${(props) => props.theme.fonts.secondary};
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 10px;
  padding: 10px;
  transition: all 700ms ease-in-out;
  max-width: 400px;
  padding: 20px;

  h4 {
    text-align: center;
    text-transform: uppercase;
  }

  p {
    margin: 10px 0;
    word-break: break-all;
  }

  b {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: 1900px) {
    max-width: 900px;

    h4,
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 576px) {
    right: ${({ isToasty }) => (isToasty.open ? '0' : '-110vw')};
    max-width: 250px;

    h4,
    p {
      font-size: 0.9rem;
    }
  }
`

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required field')
    .min(10, 'Minimum length: 10 chars')
    .max(30, 'Maximum length: 30 chars'),
  email: yup
    .string()
    .required('Required field')
    .email('Invalid email')
    .min(10, 'Minimum length: 10 chars')
    .max(30, 'Maximum length: 30 chars'),
  complaint: yup.string().required('Required field'),
  message: yup
    .string()
    .required('Required field')
    .min(10, 'Minimum length: 10 chars')
    .max(200, 'Maximum length: 200 chars'),
})

const Contact = () => {
  const [isToasty, setToasty] = useState({
    open: false,
    complaintName: '',
    complaintEmail: '',
    complaintSubject: '',
    complaintMessage: '',
  })

  const submitSucess = (values) => {
    setToasty({
      open: true,
      complaintName: values.name,
      complaintEmail: values.email,
      complaintSubject: values.complaint,
      complaintMessage: values.message,
    })

    setTimeout(() => {
      setToasty({
        ...isToasty,
        open: false,
      })
    }, 5000)
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>Dunder Mifflin, this is Pam!</h1>
          <Image
            src="/assets/contact.jpg"
            alt="Dunder Mifflin, this is Pam!"
            width={1000}
            height={570}
            quality={100}
          />
          <figcaption>
            sorry, Michael is in jail...
            <Image
              src="/icons/prision-mike.jpg"
              alt="Prision Mike"
              width={600}
              height={500}
              quality={100}
            />
          </figcaption>
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            complaint: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={submitSucess}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <legend>File a complaint</legend>
              <Wrapper>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Type your name"
                    onChange={handleChange}
                    name="name"
                    value={values.name}
                  />

                  {errors.name && <span>{errors.name}</span>}
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Type your email"
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                  />
                  {errors.email && <span>{errors.email}</span>}
                </div>

                <div>
                  <label>Complaint</label>
                  <select name="complaint" onChange={handleChange} defaultValue={values.complaint}>
                    <option value="">Choose a complaint</option>
                    <option>Michael is dating my mom</option>
                    <option>Dwight did a fire drill</option>
                    <option>Jim&#39;s ugly hair</option>
                    <option>Pam is too cool</option>
                    <option>Ryan and Kelly making out</option>
                    <option>Meredith came undressed</option>
                    <option>Kevin ate my lunch</option>
                  </select>
                  {errors.complaint && <span>{errors.complaint}</span>}
                </div>
              </Wrapper>

              <label>Message</label>
              <textarea
                placeholder="Describe your complaint"
                onChange={handleChange}
                value={values.message}
                name="message"
              ></textarea>
              {errors.message && <span>{errors.message}</span>}

              <button type="submit">SEND</button>
            </Form>
          )}
        </Formik>
      </Container>
      <Toasty isToasty={isToasty}>
        <h4>
          <b>Complaint made!</b>
        </h4>
        <p>
          <b>Name: </b>
          {isToasty.complaintName}
        </p>
        <p>
          <b>Email: </b>
          {isToasty.complaintEmail}
        </p>
        <p>
          <b>Subject: </b>
          {isToasty.complaintSubject}
        </p>
        <p>
          <b>Message: </b>
          {isToasty.complaintMessage}
        </p>
      </Toasty>
    </>
  )
}

export default Contact
