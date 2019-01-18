import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Row, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap' 
import author from '../Util/authors'
import JhonattanImage from '../images/author_400x400.jpg'
import Juanga from '../images/ceo.jpg'
import {slugify} from '../Util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Personal">
    <SEO title="Team" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={JhonattanImage} style={{ maxWidth: '100%'}} alt="Perfil de Jhonattan" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{author[0].name}</CardTitle>
            <CardText>{author[0].bio}</CardText>
            <Button color="warning" href={`/author/${slugify(author[0].name)}`}>Ver artículos</Button>
          </CardBody>
        </Card>

      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={Juanga} style={{ maxWidth: '100%'}} alt="Perfil de CEO" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{author[1].name}</CardTitle>
            <CardText>{author[1].bio}</CardText>
            <Button color="warning" href={`/author/${slugify(author[1].name)}`}>Ver artículos</Button>
          </CardBody>
        </Card>

      </div>
    </Row>
  </Layout>
)

export default TeamPage