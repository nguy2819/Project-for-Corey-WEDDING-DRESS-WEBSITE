import React from 'react';
import styled from 'styled-components';
import EmailUs from './EmailUs';

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 30% 70%;
    overflow: auto;
`;

const ElementWrapper = styled.div`
    grid-column: 2;
`;

const Sidebar = styled.div`
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    color: white;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const SyledButton = styled.button`
    font-size: 20px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    background-color: #f1f1f1;
    &:hover {
        background-color: white;
        border-right: 1px solid transparent;
    };
`;

const SelectedButton = styled.button`
font-size: 20px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    background-color: white;
    border-right: 1px solid transparent;
`;

const Content = styled.div`
    padding: 1px 16px;
    margin-left: 20px;
    grid-column: 2;
`;

const StyleBookAnAppointment = styled.div`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    border: 3px solid #ccc;
    border-radius: 25px;
`;

class ContactUs extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentTab: ''
    };
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(tabName){
    this.setState({currentTab: tabName});
  }

  render(){

    let element = null;
    switch(this.state.currentTab){
    case 'book':
      element = (<Content>
        <p>Book an appointment with a <strong>Fin &amp; Femme</strong> consultant to help you find the dress of your dreams.</p>
        <StyleBookAnAppointment><p><i className="fas fa-phone-volume"></i> 305.591.7332 </p></StyleBookAnAppointment>
        <StyleBookAnAppointment><p><i className="fas fa-envelope"></i> info@liancarlo.com</p></StyleBookAnAppointment>
        <StyleBookAnAppointment><p><i className="fas fa-map-marked-alt"></i> 1737 N.W. 79th Avenue Miami, FL 33126</p></StyleBookAnAppointment>
      </Content>);
      break;
    case 'customerservice':
      element = (<Content>
        <p>If you have any questions, comments, or concerns about your order or your upcoming appointment. Please don't hesitate to contact <strong>Fin &amp; Femme</strong> Customer Service, your opinion is very important to us. We look forward to make you happy!</p>
        <StyleBookAnAppointment><p><i className="fas fa-phone-volume"></i> 305.591.7332 </p></StyleBookAnAppointment>
        <StyleBookAnAppointment><p><i className="fas fa-envelope"></i> info@liancarlo.com</p></StyleBookAnAppointment>
      </Content>
      );
      break;
    case 'websitetechnicalissue':
      element = (<Content>
        <p>If you are experiencing technical difficulties with our website, we apologize for any inconvenience. Please reach out to our webmaster because your opinion is very important to us. We appreciate your feedback and will use it to evaluate changes and make improvements in our site.</p>
        <StyleBookAnAppointment><p><i className="fas fa-phone-volume"></i> 305.591.7332 </p></StyleBookAnAppointment>
        <StyleBookAnAppointment><p><i className="fas fa-envelope"></i> info@liancarlo.com</p></StyleBookAnAppointment>
      </Content>);
      break;
    case 'pressinquiries':
      element = (<Content>
        <p>For all press inquiries and opportunities to work with  <strong>Fin &amp; Femme</strong>, please send us an email.</p>
        <StyleBookAnAppointment><p><i className="fas fa-phone-volume"></i> 305.591.7332 </p></StyleBookAnAppointment>
        <StyleBookAnAppointment><p><i className="fas fa-envelope"></i> info@liancarlo.com</p></StyleBookAnAppointment>
      </Content>);
      break;
    case 'email':
      element = <EmailUs />;
      break;
    }
        
    return (
      <Wrapper>
        <Sidebar>
          {this.state.currentTab === 'book' 
            ? <SelectedButton> Book an Appointment </SelectedButton>
            : <SyledButton onClick={() => this.onTabChange('book')}> Book an Appointment </SyledButton>}
          {this.state.currentTab === 'customerservice' 
            ? <SelectedButton> Customer Service </SelectedButton>
            : <SyledButton onClick={() => this.onTabChange('customerservice')}> Customer Service</SyledButton>}
          {this.state.currentTab === 'websitetechnicalissue' 
            ? <SelectedButton> Website Technical Issue </SelectedButton>
            : <SyledButton onClick={() => this.onTabChange('websitetechnicalissue')}> Website Technical Issue</SyledButton>}
          {this.state.currentTab === 'pressinquiries' 
            ? <SelectedButton> Press Inquiries </SelectedButton>
            : <SyledButton onClick={() => this.onTabChange('pressinquiries')}> Press Inquiries</SyledButton>}
          {this.state.currentTab === 'email' 
            ? <SelectedButton> Email Us </SelectedButton>
            : <SyledButton onClick={() => this.onTabChange('email')}> Email Us</SyledButton>}
        </Sidebar>
        <ElementWrapper>
          {element}
        </ElementWrapper>
      </Wrapper>
    );
  }
}

export default ContactUs;
