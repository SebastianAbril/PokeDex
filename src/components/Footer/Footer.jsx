import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  return (
    <FooterContainer backgroundColor={props.backgroundColor}>
      <FooterText fontWeight={400}>Made by Sebastian Abril</FooterText>
      <FooterText fontWeight={700}> Visit my WebPage</FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${(props) => props.backgroundColor};
  padding: 10px;
  width: 100%;
  position: fixed;
  bottom: 0px;

  /* position: fixed;
  bottom: 0px;
  height: 50px;
  left: 0px; */
`;

const FooterText = styled.p`
  font-size: 2rem;
  font-family: Karla;
  font-weight: ${(props) => props.fontWeight};
`;

export { Footer };
