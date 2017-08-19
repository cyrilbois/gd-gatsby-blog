import React from 'react';
import styled from 'styled-components';
import GithubIcon from 'react-icons/lib/fa/github';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import { siteMetadata } from '../../gatsby-config'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.color || '#555'};
  transition: color 175ms ease-in-out, transform 175ms ease-in-out;
  :hover {
    transform: scale(1.1);
    color: ${props => props.hoverColor};
  }
`;

const ExternalLink = props => {
  return (
    <Link target="_blank" rel="noopener" {...props}>
      {props.children}
    </Link>
  );
};

const Types = {
  github(props) {
    const githubUrl = `https://github.com/${siteMetadata.github}`
    return (
      <ExternalLink hoverColor="#333333" href={githubUrl} {...props}>
        <GithubIcon size={32} />
      </ExternalLink>
    );
  },
  twitter(props) {
    const twitterUrl = `https://github.com/${siteMetadata.twitter}`
    return (
      <ExternalLink hoverColor="#1da1f2" href={twitterUrl} {...props}>
        <TwitterIcon size={32} />
      </ExternalLink>
    );
  },
};

export default function SocialButton({ type, ...rest }) {
  const Type = Types[type];
  return (
    <Container {...rest}>
      <Type {...rest} />
    </Container>
  );
}
