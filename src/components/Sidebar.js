import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Newsletter
                    </CardTitle>
                </CardBody>
                <Form className="text-center">
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            placeholder="ingresa tu e-mail para recibir noticias"
                        />
                        <button className="btn btn-outline-success text-uppercase">Suscribirse</button>
                        
                    </FormGroup>
                    
                    
                </Form>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">Publicidad</CardTitle>
                    <img src="https://via.placeholder.com/320x200" alt="Publicidad" style={{width: "100%"}} />
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text uppercase mb-3">Entradas Recientes</CardTitle>
                    <StaticQuery query={SidebarQuery} render={(data) => (
                        <div>
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <Card key={node.id}>
                                    <Link to={node.frontmatter.path}>
                                        <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} />
                                    </Link>
                                    <CardBody>
                                        <CardTitle>
                                            <Link to={node.frontmatter.path}>
                                                {node.frontmatter.title}
                                            </Link>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    )}/>
                </CardBody>
            </Card>
        </div>
    )
} 
const SidebarQuery = graphql`
    query sidebarQuery{
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: 3
        ){
            edges{
                node{
                    id
                    frontmatter{
                        title
                        path
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
export default Sidebar