import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { siteMetadata } from '../../gatsby-config.js'

const Span = styled.span`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  /* fontSize and lineHeight come from scale() */
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`

const H3 = styled.h3`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  font-family: ${props => props.fontFamily};
`

const Div = styled.div`
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  max-width: ${props => props.maxWidth};
  padding: ${props => props.padding};
`

const gatsbyLinkStyle = {
  boxShadow: 'none',
  textDecoration: 'none',
  color: 'inherit',
}

class Template extends React.Component {
  render() {
    const websiteTitle = siteMetadata.title
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      {
        /* header on the home page */
      }
      header = (
        <Span marginTop={0} marginBottom={rhythm(1.5)} {...scale(1.5)}>
          <Link to={'/'} style={gatsbyLinkStyle}>
            {websiteTitle}
          </Link>
        </Span>
      )
    } else {
      {
        /* header on the any other page (e.g. a blog post page) */
      }
      header = (
        <H3
          fontFamily={'Montserrat, sans-serif'}
          marginTop={0}
          marginBottom={rhythm(-1)}
        >
          <Link to={'/'} style={gatsbyLinkStyle}>
            {websiteTitle}
          </Link>
        </H3>
      )
    }
    return (
      <Div
        marginLeft={'auto'}
        marginRight={'auto'}
        maxWidth={rhythm(24)}
        padding={`${rhythm(1.5)} ${rhythm(3 / 4)}`}
      >
        {header}
        {children}
      </Div>
    )
  }
}

export default Template
