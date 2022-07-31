import { Formik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'

import Image from 'next/image'

import Header from '../components/Header'
import { Container, Form, Wrapper, Toasty } from '../styles/pages/contact'

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
    .max(300, 'Maximum length: 300 chars'),
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
      <Header title="Contact" />
      <Container>
        <div>
          <h1>Dunder Mifflin, this is Pam!</h1>
          <Image
            src="/assets/contact.jpg"
            alt="Dunder Mifflin, this is Pam!"
            width={1000}
            height={570}
            quality={100}
            priority={true}
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
            name: isToasty.complaintName,
            email: isToasty.complaintEmail,
            complaint: isToasty.complaintSubject,
            message: isToasty.complaintMessage,
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
