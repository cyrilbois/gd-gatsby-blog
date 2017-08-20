import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import { rhythm, scale, options } from '../utils/typography'
import { siteMetadata } from '../../gatsby-config.js'
import Footer from '../components/Footer';

class Template extends React.Component {
  render() {
    const websiteTitle = siteMetadata.title
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      {/* header on the home page */}
      header = (
        <h1
          style={{
            ...scale(1),
            fontFamily: options.headerFontFamily.join(','),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {websiteTitle}
          </Link>
        </h1>
      )
    } else {
      {/* header on the any other page (e.g. a blog post page) */}
      header = (
        <h3
          style={{
            fontFamily: options.headerFontFamily.join(','),
            marginTop: 0,
            marginBottom: rhythm(0.5),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {websiteTitle}
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
        <Footer />
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
