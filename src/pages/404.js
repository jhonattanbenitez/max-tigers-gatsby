import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No encontrado" />
    <h1>Página no encontrada</h1>
    <p>Al parecer has llegado a una página que ya no existe</p>
    <Link className="btn btn-primary text-uppercase" to={'/'}>Volver al inicio</Link>
  </Layout>
)

export default NotFoundPage
