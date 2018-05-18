import React from 'react'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import { siteMetadata } from '../../gatsby-config'
// import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

const Bio = () => {
  const twitterUrl = `https://twitter.com/${siteMetadata.twitter}`
  const githubUrl = `https://github.com/${siteMetadata.github}`

  return (
    <div>
      <p>
        <img
          src={profilePic}
          alt={siteMetadata.author}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>{siteMetadata.author}</strong>, Pythonista & JS lover (D3, React). You can find me on{' '}
        <a href={twitterUrl}>Twitter</a>{' '}
        &amp;{' '}
        <a href={githubUrl}>Github</a>
      </p>
    </div>
    )
}

export default Bio
