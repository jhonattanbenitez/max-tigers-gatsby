import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo'
import {  Card, CardBody, CardSubtitle, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import {slugify} from '../Util/utilityFunctions'


const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout pageTitle={post.title}>
      <SEO title={post.title} />
          <Card>
            <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
            <CardBody>
              <CardSubtitle>
                <span className="text-info">{post.date}</span> por {' '}
                <span className="text-info">{post.author}</span>
              </CardSubtitle>  
              <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
              <ul className="post-tags">
                {post.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tag/${slugify}`}>
                      <Badge color="warning">{tag}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
              
            </CardBody>

          </Card>
    </Layout>
  )
  
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
      markdownRemark(fields: {slug: {eq: $slug}}){
        id
        html
        frontmatter{
          title
          author
          date(formatString: "Do MM YYYY")
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 700){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
   }
`
export default SinglePost
