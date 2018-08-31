import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

const Hr = styled.hr`
  margin-bottom: ${props => props.marginBottom};
`

const P = styled.p`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  /* fontSize and lineHeight come from scale() */
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`

const Ul = styled.ul`
  display: 'flex';
  flex-wrap: 'wrap';
  justify-content: 'space-between';
  list-style: 'none';
  padding: 0;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <P marginTop={rhythm(-1)} marginBottom={rhythm(1)} {...scale(-0.2)}>
          {`${post.frontmatter.date} | ${post.timeToRead} min Read`}
        </P>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Hr marginBottom={rhythm(1)} />
        <Bio />
        <Ul>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </Ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//         description
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt
//       timeToRead
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      excerpt
      timeToRead
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
