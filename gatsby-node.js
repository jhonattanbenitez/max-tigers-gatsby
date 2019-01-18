const { slugify } = require('./src/Util/utilityFunctions');
const path = require('path');
const authors = require('./src/Util/authors')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const singlePostTemplate = path.resolve('src/templates/single-post.js')

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            author
                            
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) return Promise.reject(res.errors)
        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({ node }) => {
            console.log(node);
            createPage({
                path: node.fields.slug,
                component: singlePostTemplate,
                context: {
                    // passing slug for template to use to get post
                    slug: node.fields.slug,
                    //find author imageurl and pass it to the single post template
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
                }
            })
        });
    })
}