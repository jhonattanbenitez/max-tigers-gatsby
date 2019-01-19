import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'

const AboutPage = () => (
  <Layout pageTitle="Streams">
    <SEO title="Streams" keywords={[`gatsby`, `application`, `react`]} />
    <ReactTwitchEmbedVideo channel="Maxtigersgg" />
  </Layout>
)

export default AboutPage