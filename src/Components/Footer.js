import React from 'react';
import styled from 'styled-components';

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
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: white;
    justify-content: space-evenly;
`;

export default function Footer({ footerItems, footerIcons }){
    const footerElements = footerItems.map(n => {
        return (
        <FooterStyle href={n.footerUrl} key={n.footerText}>
            {n.footerText}
        </FooterStyle>);
    });
    const icons = footerIcons.map(i => <StyledIcon className="fab">{i}</StyledIcon>)
    return (
            <StyledFooter>
                <HeavyLine>
                    {footerElements}
                    {icons}
                </HeavyLine>
            </StyledFooter>
    )
};
