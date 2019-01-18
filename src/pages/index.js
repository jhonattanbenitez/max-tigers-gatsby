import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby';
import Post from '../components/Post'
import { Timeline } from 'react-twitter-widgets';
import PaginationLinks from '../components/PaginationLinks'


const IndexPage = () => {
  const postsPerPage = 2;
  let numberOfPages
  return(<Layout pageTitle="Max Tigers">
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery query={indexQuery} render={data => {
        numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}

              />
            ))}
            <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
          </div>)
  }} />
  
  <Timeline
          dataSource={{
          sourceType: 'profile',
          screenName: 'MaxTigersGG'
          }}
          options={{
          username: 'MaxTigersGG',
          height: '800'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
          />
</Layout>)
  
}
const indexQuery = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}
  limit: 2) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "Do MM YYYY")
          author
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
