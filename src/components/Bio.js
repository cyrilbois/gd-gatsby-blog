import React from 'react'
// import styled from 'styled-components'
import 'typeface-montserrat'
import 'typeface-merriweather'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import { siteMetadata } from '../../gatsby-config'

// const Div = styled.div`
//   display: flex;
//   margin-bottom: 0;
// `

// const P = styled.p`
//   margin-bottom: ${props => props.marginBottom};
// `

// const Bio = () => {
//   const twitterUrl = `https://twitter.com/${siteMetadata.twitter}`
//   const githubUrl = `https://github.com/${siteMetadata.github}`
//   return (
//     <Div>
//       <P marginBottom={rhythm(0.5)}>
//         <img
//           src={profilePic}
//           alt={siteMetadata.author}
//           style={{
//             float: 'left',
//             marginRight: rhythm(1 / 4),
//             marginBottom: 0,
//             width: rhythm(2),
//             height: rhythm(2),
//           }}
//         />
//         Written by <strong>{siteMetadata.author}</strong>, Pythonista & JS lover
//         (D3, React). You can find me on <a href={twitterUrl}>Twitter</a> &amp;{' '}
//         <a href={githubUrl}>Github</a>
//       </P>
//     </Div>
//   )
// }

const Bio = () => {
  const twitterUrl = `https://twitter.com/${siteMetadata.twitter}`
  const githubUrl = `https://github.com/${siteMetadata.github}`
  return (
    <div style={{ display: 'flex', marginBottom: 0 }}>
      <p style={{ marginBottom: rhythm(0.5) }}>
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
        Written by <strong>{siteMetadata.author}</strong>, Pythonista & JS lover
        (D3, React). You can find me on <a href={twitterUrl}>Twitter</a> &amp;{' '}
        <a href={githubUrl}>Github</a>
      </p>
    </div>
  )
}

export default Bio
