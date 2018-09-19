import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIcon = styled.i`
    font-size: 32px;
`;

const FooterStyle = styled.a`
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
    text-decoration: none;
    justify-content: space-evenly;
    font-size: 32px;
    font-weight: bold;
`;

const HeavyLine = styled.div`
    padding: 2px;
    display: flex;
    justify-content: space-evenly; //this one still not working
`;

const StyledFooter = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #be8d62;
    color: black;
    justify-content: space-evenly;
`;

function Footer({ footerItems, footerIcons }){
  const footerElements = footerItems.map(n => {
    return (
      <FooterStyle key={n.footerText} href={n.footerUrl}>
        {n.footerText}
      </FooterStyle>);
  });
  const icons = footerIcons.map(i => <StyledIcon key={i.replace(/\\u/, '')} className="fab">{i}</StyledIcon>);
  return (
    <StyledFooter>
      <HeavyLine>
        {footerElements}
        {icons}
      </HeavyLine>
    </StyledFooter>
  );
}

Footer.propTypes = {
  footerItems: PropTypes.array,
  footerIcons: PropTypes.array
};

export default Footer;
