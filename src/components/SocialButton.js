import React from 'react'
// import styled from 'styled-components'
import { FaGithub, FaTwitter, FaRssSquare } from 'react-icons/fa'
import { siteMetadata } from '../../gatsby-config'

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// const Link = styled.a`
//   display: inline-block;
//   /* both text-decoration: none and box-shadow: none are required to hide the line */
//   text-decoration: none;
//   box-shadow: none;
//   color: ${props => props.color || '#555'};
//   transition: color 175ms ease-in-out, transform 175ms ease-in-out;
//   :hover {
//     transform: scale(1.5);
//     color: ${props => props.hoverColor};
//   }
// `

// class GithubIcon extends React.Component {
//   render() {
//     return <FaGithub size={32} />
//   }
// }

// class TwitterIcon extends React.Component {
//   render() {
//     return <FaTwitter size={32} />
//   }
// }

// class FeedIcon extends React.Component {
//   render() {
//     return <FaRssSquare size={32} />
//   }
// }

// const ExternalLink = props => {
//   return (
//     <Link target="_blank" rel="noopener" {...props}>
//       {props.children}
//     </Link>
//   )
// }

// const Types = {
//   github(props) {
//     const githubUrl = `https://github.com/${siteMetadata.github}`
//     return (
//       <ExternalLink hoverColor="#333333" href={githubUrl} {...props}>
//         <GithubIcon />
//       </ExternalLink>
//     )
//   },
//   twitter(props) {
//     const twitterUrl = `https://twitter.com/${siteMetadata.twitter}`
//     return (
//       <ExternalLink hoverColor="#1da1f2" href={twitterUrl} {...props}>
//         <TwitterIcon />
//       </ExternalLink>
//     )
//   },
//   feed(props) {
//     const rssFeedUrl = siteMetadata.rssFeed
//     return (
//       <ExternalLink hoverColor="#ff8c00" href={rssFeedUrl} {...props}>
//         <FeedIcon />
//       </ExternalLink>
//     )
//   },
// }

// function SocialButton({ type, ...rest }) {
//   const Type = Types[type]
//   return (
//     <Container {...rest}>
//       <Type {...rest} />
//     </Container>
//   )
// }

class GithubIcon extends React.Component {
  render() {
    return <FaGithub size={32} />
  }
}

class TwitterIcon extends React.Component {
  render() {
    return <FaTwitter size={32} />
  }
}

class FeedIcon extends React.Component {
  render() {
    return <FaRssSquare size={32} />
  }
}

const ExternalLink = props => {
  return (
    <a
      target="_blank"
      rel="noopener"
      style={{
        display: 'inline-block',
        textDecoration: 'none',
        boxShadow: 'none',
        color: '#555',
        transition: 'color 175ms ease-in-out, transform 175ms ease-in-out',
      }}
    >
      {props.children}
    </a>
  )
}

const Types = {
  github(props) {
    const githubUrl = `https://github.com/${siteMetadata.github}`
    return (
      <ExternalLink hoverColor="#333333" href={githubUrl} {...props}>
        <GithubIcon />
      </ExternalLink>
    )
  },
  twitter(props) {
    const twitterUrl = `https://twitter.com/${siteMetadata.twitter}`
    return (
      <ExternalLink hoverColor="#1da1f2" href={twitterUrl} {...props}>
        <TwitterIcon />
      </ExternalLink>
    )
  },
  feed(props) {
    const rssFeedUrl = siteMetadata.rssFeed
    return (
      <ExternalLink hoverColor="#ff8c00" href={rssFeedUrl} {...props}>
        <FeedIcon />
      </ExternalLink>
    )
  },
}

function SocialButton({ type, ...rest }) {
  const Type = Types[type]
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Type {...rest} />
    </div>
  )
}

export default SocialButton
