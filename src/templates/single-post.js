import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo'
import {  Card, CardBody, CardSubtitle, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../Util/utilityFunctions'
import authors from '../Util/authors'
import {DiscussionEmbed} from 'disqus-react'


const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)
  const baseUrl = 'https://maxtigers.com/'
  const disqusShortname = "www-maxtigers-com-1"
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: post.title,
    url: baseUrl + pageContext.slug
  }
  return (
    <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
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
      <h3 className="text-center">
                  Comparte esta publicación
      </h3>
      <div className="text-center social-share-links">
                  <ul>
                    <li><a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug}
                      className="facebook"
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-facebook-f fa-2x"></i>
                      </a></li>
        </ul>
        <ul>
          <li><a href={'https://www.twitter.com/share?url=' + baseUrl + pageContext.slug + '&text=' + post.title + '&via' + 'twitterHandler'}
                      className="twitter"
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-twitter fa-2x"></i>
                      </a></li>
        </ul>
   
      </div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
  )
  
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!, $imageUrl: String!){
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
      file(relativePath: { eq: $imageUrl }) {
        childImageSharp{
          fluid(maxWidth: 300){
            ...GatsbyImageSharpFluid
          }
       }
      }
   }
`
export default SinglePost
