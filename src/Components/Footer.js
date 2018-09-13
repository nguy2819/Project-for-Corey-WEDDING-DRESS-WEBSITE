import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.a`
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
    text-decoration: none;
    justify-content: space-evenly;
`
const HeavyLine = styled.div`
    padding: 2px;
    display: flex;
    justify-content: space-evenly; //this one still not working
`

const StyledFooter = styled.h1`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: white;
    justify-content: space-evenly;
`
//footer pinterest didn't work
export default function Footer({ footerItems }){
    const footerElements = footerItems.map(n => {
        return (
        <FooterStyle href={n.footerUrl} key={n.footerText}>
            {n.footerText}
            {n.footerIcon && <i className="fab fa-facebook-square"></i>}
            {n.footerIcon && <i class="fab fa-instagram"></i>}
            {n.foooterIcon && <i class="fab fa-pinterest-square"></i>}
            {n.footerIcon && <i class="fab fa-twitter"></i>}
        </FooterStyle>);
    });
    return (
            <StyledFooter>
                <HeavyLine>
                    {footerElements}
                </HeavyLine>
            </StyledFooter>
    )
};
