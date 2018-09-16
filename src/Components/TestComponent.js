import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Nav from './Navigation';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Wrapper = styled.div`
    margin: auto;
    width: 80%;
`;

//To test new components, NOT THE FINAL PRODUCT

export default function Testing(){
    const elements = [
        {
            navigationText: 'Dress Maker',
            navigationUrl: '/dress-maker'
        },
        {
            navigationText: 'Pick a Style',
            navigationUrl: '/pick-a-style'
        },
        {
            navigationText: 'Contact Us',
            navigationUrl: 'contact-us'
        },
        {
            navigationText: 'Cart',
            navigationIcon: '\uf07a',
            navigationUrl: 'cart'
        }
    ]

    const elements2 = [
        {
            footerText: 'Book an Appointment',
            footerUrl: 'book-an-appointment'
        },
        {
            footerText: '305.591.7332' 
        }
    ]

    const footerIcons = 
    [
        '\uf082',
        '\uf16d',
        '\uf0d3',
        '\uf099'
    ]

    return (
        <Wrapper>
            <ContactUs />
            <Footer footerItems={elements2} footerIcons={footerIcons}/>
        </Wrapper>
    )
}