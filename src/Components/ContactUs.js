import React from 'react';
import styled from 'styled-components';
// import EmailUs from './EmailUs';

const SideBar = styled.a`
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
`
const Content = styled.p`
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
`

export default function ContactUs(){
    return (
        <SideBar>
            <a href="/book-an-appointment"> Book an Appointment </a>
            <Content>
                <p>Book an appointment with a Fin & Femme consultant to help you find the dress of your dreams.</p>
            </Content>
        </SideBar>
    )
};