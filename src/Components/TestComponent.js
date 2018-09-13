import React from 'react';
import Header from './Header';
import Nav from './Navigation';
import Contact from './Contact';

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
            navigationText: 'Contact',
            navigationUrl: 'contact'
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
            <Contact />
        </div>
    )
}