import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 60%;
margin-left:20%;
padding: 40px;
display: block;
border: 10px solid #eac748;
  background-color: #eceda0;

`;


const AboutApp = () => {
    return (
        <Wrapper>
            <h3>Welcome in yours online phonebook</h3>
            <p>Welcome to your online directory.</p>
                <p>Now you don't need a phone anymore to save a new contact.</p>
               <p> All your numbers are always where you are, without a phone, all you need is Internet access.</p>
        </Wrapper>
    );
};

export default AboutApp;

