import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
`;


export default function Footer() {
  // https://www.materialui.co/
  // http://www.colorhexa.com/
  const colors = {
    color: `rgba(44, 62, 80, 0.8)`,
    hoverColor: `rgba(52, 152, 219, 1)`
  }
  return (
    <Container>
      <SocialIcons flexDirection="row" width="240px" {...colors} />
    </Container>
  );
}
