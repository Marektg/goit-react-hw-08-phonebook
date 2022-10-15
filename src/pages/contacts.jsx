import React from 'react';
import ContactForm from 'components/contactForm';
import FilteredUsers from 'components/filteredUsers';
import {ContactList} from 'components/contactList';

function Contacts() {
    return (
        <>
            <ContactForm />
            <h2>Contacts</h2>
            <FilteredUsers />
            <ContactList />
        </>
    )
}

export default Contacts;