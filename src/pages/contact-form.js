import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact-form'

const ContactFormPage = () => (
  <Layout>
    <SEO title="Contact Form Page" />
    <h1>Form Test</h1>
    <ContactForm />
  </Layout>
)

export default ContactFormPage
