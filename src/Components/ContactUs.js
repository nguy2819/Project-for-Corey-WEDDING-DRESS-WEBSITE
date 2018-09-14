import React from 'react';
import styled from 'styled-components';
import EmailUs from './EmailUs';

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 30% 70%;
    overflow: auto;
`
const ElementWrapper = styled.div`
    grid-column: 2;
`

const Sidebar = styled.div`
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
`

const Content = styled.p`
    padding: 1px 16px;
    margin-left: 20px;
    grid-column: 2;
`

class ContactUs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentTab: ''
        }
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
                    <p>Book an appointment with a Fin & Femme consultant to help you find the dress of your dreams.</p>
                    <p><i class="fas fa-phone-volume"></i> 305.591.7332 </p>
                    <p><i class="fas fa-envelope"></i> info@liancarlo.com</p>
                    <p><i class="fas fa-map-marked-alt"></i> 1737 N.W. 79th Avenue Miami, FL 33126</p>
                </Content>)
                break;
            case 'email':
                element = <EmailUs />
                break;
        }
        
        return (
            <Wrapper>
                <Sidebar>
                    <button onClick={e => this.onTabChange('book')}> Book an Appointment </button>
                    <button onClick={e => this.onTabChange('email')}> Email Us</button>
                </Sidebar>
                <ElementWrapper>
                    {element}
                </ElementWrapper>
            </Wrapper>
        )
    };
}

export default ContactUs;