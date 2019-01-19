import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
/* import { Row, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap' 
import author from '../Util/authors'
import JhonattanImage from '../images/author_400x400.jpg'
import Juanga from '../images/ceo.jpg'
import {slugify} from '../Util/utilityFunctions' */
import LeagueOfLegends from '../components/LeagueOfLegends';

const Teams = () => (
  <Layout pageTitle="Equipos">
    <SEO title="Team" keywords={[`gatsby`, `application`, `react`]} />
    <LeagueOfLegends />
  </Layout>
)

export default Teams