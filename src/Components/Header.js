import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    padding: 2px;
    margin: 0;
    text-align: center; 
    padding-top: 10px;
    padding-bottom: 10px;
`

const Wrapper = styled.div`
    padding: 5px 0;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: block;
    margin-top: 25px;
`

export default function Header(){
    return (
        <Wrapper>
            <StyledHeader>Fin & Femme</StyledHeader>
        </Wrapper>
    )
};
