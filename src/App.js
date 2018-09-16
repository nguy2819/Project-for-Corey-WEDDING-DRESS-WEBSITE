import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Test from './Components/TestComponent';
import Routing from './Routing';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const PageStretch = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledFixture = styled.div`
  flex: 0 1 auto;
`;

const StyledContent = styled.div`
  flex: 1 1 auto;
  width: 90%;
  margin: auto;
`;

//TODO: Move to constant file
const navElements = [
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

const footerElement = [
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

class App extends Component {
  render() {
    return (
      <PageStretch>
        <StyledFixture> 
          <Header />
          <Navigation navigationItems={navElements}/>
        </StyledFixture>
        <StyledContent>
          <Routing />
        </StyledContent>
        <StyledFixture>
        <Footer footerItems={footerElement} footerIcons={footerIcons}/>
        </StyledFixture>
      </PageStretch>
    );
  }
}

export default App;
