import React from 'react';
import ContactForm from 'components/contactForm';
import FilteredUsers from 'components/filteredUsers';
import { ContactList } from 'components/contactList';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 60%;
margin-left:20%;
padding: 40px;
display: block;
border: 10px solid #eac748;
  background-color: #eceda0;

`;

function Contacts() {
    return (
        <Wrapper>
            <ContactForm />
            <h2>Contacts</h2>
            <FilteredUsers />
            <ContactList />
        </Wrapper>
    )
}

export default Contacts;