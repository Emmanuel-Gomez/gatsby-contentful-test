import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ node }) => (
  <li className="blog-post">
    <img src={node.featureImage.fluid.src} alt="fakenews"/>
    <Link to={`/${node.slug}`}><h3>{node.title}</h3></Link>
    <div>{node.content.childMarkdownRemark.excerpt}</div>
  </li>)

const IndexPage = ({data}) => (
  <Layout>
      <SEO title="Home" /> 
      <ul>
      {data.allContentfulBlog.edges.map(edge => 
        <BlogPost key={edge.node.slug} node={edge.node} />
        )
      }
      </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(
      sort: {
        fields: [published], order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          featureImage {
            fluid(maxWidth: 300) {
              src
            }
          }
        }
      }
    }
  }
`;
