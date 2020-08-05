import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MasterForm from '../components/master-form'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Form Test</h1>
    <MasterForm />
  </Layout>
)

export default IndexPage
