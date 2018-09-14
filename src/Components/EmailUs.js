import React from 'react';
import styled from 'styled-components';

const Content = styled.form`
    margin-left: 20px;
    padding: 1px 16px;
`

export default function EmailUs(){
    return (
        <Content>
            <h2> Email Us </h2>
            <form>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            </form>
        </Content>
    )
};