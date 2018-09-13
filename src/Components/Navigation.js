import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavigationItemShape } from '../Models/DataShapes'

const NavigationStyle = styled.a`
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
    text-decoration: none;
`

const HeavyLine = styled.div`
    border-bottom: 3px solid black;
    padding: 2px;
    display: flex;
    justify-content: space-evenly;
`

const Wrapper = styled.div`
    padding: 5px 0;
    border-bottom: 2px solid black;
    display: block;
    margin-top: 10px;
`

function Navigation({ navigationItems }){
    const navigationElements = navigationItems.map(n => {
        return (
        <NavigationStyle href={n.navigationUrl} key={n.navigationText}>
            {n.navigationText}
            {n.navigationIcon && <i className="fas">{n.navigationIcon}</i>}
        </NavigationStyle>);
    });
    return (
        <Wrapper>
            <HeavyLine>
                {navigationElements}
            </HeavyLine>
        </Wrapper>
    )
}

Navigation.propTypes = {
    navigationItems: PropTypes.arrayOf(PropTypes.shape(NavigationItemShape)).isRequired
}
// https://reactjs.org/docs/typechecking-with-proptypes.html

export default Navigation;


// n is a single navigation Item
// <NavigationStyle> = <a> with CSS
// Learn more through this link: https://www.styled-components.com/docs/basics#getting-started


// class Navigation extends React.Component{
//     render(){
//         const navigationElements = navigationItems.map(n => <NavigationStyle href={n.navigationUrl}>{n.navigationText}</NavigationStyle>)
//         return (
//             <div>
//                 {navigationElements}
//             </div>
//         )
//     }
// }