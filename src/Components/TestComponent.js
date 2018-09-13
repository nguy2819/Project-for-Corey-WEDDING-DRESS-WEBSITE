import React from 'react';
import Header from './Header';
import Nav from './Navigation';
import ContactUs from './ContactUs';
import Footer from './Footer';

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
        },
        {
            footerIcon: '\uf082',
            footerIcon: '\uf16d',
            footerIcon: '\uf0d3', //pinterest didn't work
            footerIcon: '\uf099'
        }
    ]

    return (
        <div>
            <Header />
            <Nav navigationItems={elements}/>
            <ContactUs />
            <Footer footerItems={elements2}/>
        </div>
    )
}