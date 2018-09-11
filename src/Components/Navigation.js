import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavigationItemShape } from '../Models/DataShapes'

const NavigationStyle = styled.a`
    margin: 10px;
    border: 3px groove grey;
    padding: 3px;
    display: inline-block;
`;

function Navigation({ navigationItems }){
    const navigationElements = navigationItems.map(n => {
        return (
        <NavigationStyle href={n.navigationUrl} key={n.navigationText}>
            {n.navigationText}
        </NavigationStyle>);
    });
    // n is a single navigation Item
    // <NavigationStyle> = <a> with CSS
    // https://www.styled-components.com/docs/basics#getting-started
    return (
        <div>
            {navigationElements}
        </div>
    )
}

Navigation.propTypes = {
    navigationItems: PropTypes.arrayOf(PropTypes.shape(NavigationItemShape)).isRequired
}
// https://reactjs.org/docs/typechecking-with-proptypes.html

export default Navigation;

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