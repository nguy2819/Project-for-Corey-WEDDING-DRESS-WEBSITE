import React from 'react';
import Header from './Header';
import Nav from './Navigation';
import ContactUs from './ContactUs';

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

    return (
        <div>
            <Header />
            <Nav navigationItems={elements}/>
            <ContactUs />
        </div>
    )
}