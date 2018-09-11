import React from 'react';
import Navigation from './Navigation'

//To test new components, NOT THE FINAL PRODUCT

export default function Testing(){
    const elements = [
        {
            navigationText: 'test',
            navigationUrl: 'https://www.google.com'
        },
        {
            navigationText: 'anotherTest',
            navigationUrl: 'https://www.google.com'
        },
        {
            navigationText: 'SamePage',
            navigationUrl: '/#'
        }
    ]

    return (
        <div>
            <Navigation navigationItems={elements}/>
        </div>
    )
}