import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ContactForm from '../components/contact-form'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Form Test</h1>
    <ContactForm />
  </Layout>
)

export default IndexPage
