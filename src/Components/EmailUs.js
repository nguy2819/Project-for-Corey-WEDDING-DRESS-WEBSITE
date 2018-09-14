import React from 'react';
import styled from 'styled-components';

const Content = styled.form`
    margin-left: 20px;
    padding: 1px 16px;
    
`;

const StyleInput = styled.div`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    border: 3px solid #ccc;
    &:hover {
        border: 3px solid #555;
    }
`;

const StyleTextArea = styled.div`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 3px solid #ccc;
    &:hover {
        border: 3px solid #555;
    };
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
`;

const StyleSubmitButton = styled.div`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
`;

const StyleSelectStateButton = styled.div`
    width: 100%;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    background-color: #f1f1f1;
`;

export default function EmailUs(){
    return (
        <Content>
            <h3> Email Us </h3>
            <p> * required fields</p>
                <form>
                    <label for="fname"> * First Name</label>
                    <StyleInput><input type="text" id="fname" name="firstname" placeholder="Your name.."/></StyleInput>

                    <label for="lname"> * Last Name</label>
                    <StyleInput><input type="text" id="lname" name="lastname" placeholder="Your last name.."/></StyleInput>

                    <label for="address1"> Address Line 1:</label>
                    <StyleInput><input type="text" id="address1" name="addressline1" placeholder="Your address.."/></StyleInput>

                    <label for="address2"> Address Line 2:</label>
                    <StyleInput><input type="text" id="address2" name="addressline2" placeholder="Your address.."/></StyleInput>

                    <label for="city"> City:</label>
                    <StyleInput><input type="text" id="city" name="city" placeholder="Your city.."/></StyleInput>

                    <label for="state"> * State:</label>
                    <StyleInput>
                            <StyleSelectStateButton>
                                <select>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado	</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </StyleSelectStateButton>
                    </StyleInput>

                    <label for="zipcode"> Zip Code:</label>
                    <StyleInput><input type="number" id="zipcode" name="zipcode" placeholder="Your zip code.."/></StyleInput>

                    <label for="phone"> * Phone number:</label>
                    <StyleInput><input type="number" id="phone" name="phone" placeholder="Your phone number.."/></StyleInput>

                    <label for="email"> * Email:</label>
                    <StyleInput><input type="email" id="email" name="email" placeholder="Your email.."/></StyleInput>

                    <label for="Order Number"> Order Number:</label>
                    <StyleInput><input type="number" id="ordernumber" name="ordernumber" placeholder="Your order number.."/></StyleInput>

                    <label for="weddingdate"> Wedding date:</label>
                    <StyleInput><input type="date" type="datetime-local" id="weddingdate" name="weddingdate" placeholder="Your wedding date.."/></StyleInput>

                    <label for="subject"> * Subject:</label>
                    <StyleInput><input type="text" id="subject" name="subject" placeholder="Please type your subject.."/></StyleInput>

                    <label for="file"> File attach:</label>
                    <StyleInput><input type="file" id="file" name="file"/></StyleInput>

                    <label for="message"> * Message:</label>
                    <StyleTextArea><input type="textarea" id="message" name="message" placeholder="Please type your message.."/></StyleTextArea>

                    <StyleSubmitButton><button> Submit </button></StyleSubmitButton>
                </form>
        </Content>
    )
};