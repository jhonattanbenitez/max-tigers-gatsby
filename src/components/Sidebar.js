import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input, CardText } from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = ({ author, authorFluid}) => {
    return (
        <div>
            {author && (
                <Card>
                    <Img className="card-image-top" fluid={authorFluid} />
                    <CardBody>
                        <CardTitle className="text-center text-uppercase mb-3">{author.name}</CardTitle>
                        <CardText>{author.bio}</CardText>
                        <div className="author-social-links text-center">
                            <ul>
                                <li>
                                    <a href={author.facebook} target="_blank" rel="noopener noreferrer" className="facebook">
                                        <i className="fab fa-facebook-f fa-2x" > </i>
                                    </a>
                                </li>
                                <li>
                                    <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="twitter">
                                        <i className="fab fa-twitter fa-2x" > </i>
                                    </a>
                                </li>
                                <li><a href={author.instragram} target="_blank" rel="noopener noreferrer" className="instagram">
                                    <i className="fab fa-instagram fa-2x" > </i>
                                </a>
                                </li>
                            </ul>
                        
                        </div>
                    </CardBody>
                </Card>
            )}
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
                                    <Link to={node.fields.slug}>
                                        <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} />
                                    </Link>
                                    <CardBody>
                                        <CardTitle>
                                            <Link to={node.fields.slug}>
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
                        
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`
export default Sidebar