import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavigationItemShape } from '../Models/DataShapes';

const NavigationStyle = styled.a`
    text-align: center;
    text-decoration: none;
    margin: 10px;
    display: inline-block;
`;

const NavSpan = styled.span`
    margin-bottom: 10px;
    a {color: black;}
    &:hover {
        background: green;
        border-radius: 10px;
        a { color: white; }
        // transform: scale(1.5, 1.25); //make the navigation bar pop out bigger
        box-shadow: 5px 5px 5px #888;
}
`;

const HeavyLine = styled.div`
    border-bottom: 3px solid black;
    border-color: #be8d62;
    padding: 2px;
    display: flex;
    justify-content: space-evenly;
`;

const Wrapper = styled.div`
    padding: 5px 0;
    border-bottom: 2px solid black;
    border-color: #be8d62;
    display: block;
    margin-top: 10px;
`;

function Navigation({ navigationItems }){
  const navigationElements = navigationItems.map(n => {
    return (
      <NavSpan key={n.navigationText}>
        <NavigationStyle href={n.navigationUrl}>
          {n.navigationText}
          {n.navigationIcon && <i className="fas">{n.navigationIcon}</i>}
        </NavigationStyle>
      </NavSpan>);
  });
  return (
    <Wrapper>
      <HeavyLine>
        {navigationElements}
      </HeavyLine>
    </Wrapper>
  );
}

Navigation.propTypes = {
  navigationItems: PropTypes.arrayOf(PropTypes.shape(NavigationItemShape)).isRequired
};
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
