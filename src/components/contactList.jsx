import {  useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useDeleteContactMutation, useGetContactsQuery } from 'services/phonebookApi';
import Loader from './Loader';

export const ContactList = () => {
    const {
        data: contacts=[],
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetContactsQuery();
    console.log(contacts);
    const filter = useSelector(state => state.filter);

    let filteredContacts = useMemo(() => {
        return contacts
            .filter(c => c.name.toLowerCase().includes(filter))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [contacts, filter]);

    let content = <li>No contacts in the phonebook</li>;
    const [deleteContact] = useDeleteContactMutation();

    const renderContacts = filteredContacts.map(({ id, name, number }) => (

        <li key={id}
            style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                columnGap: "20px",
                alignItems: "center",
            }
            }>
            {name}: {number}
            <button onClick={() => deleteContact(id)}
                style={
                    {
                        borderRadius: "15px",
                        letterSpacing: "2px",
                        backgroundClip: "#f8b4c0",
                        cursor: "pointer",
                    }
                }>
                Delete
            </button>
        </li>))

    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        filteredContacts.length !== 0
            ? (content = (
                <ul>
                    {renderContacts}
                </ul>
            ))
            : (content = <li>No contacts in the phonebook</li>);
    } else if (isError) {
        content = <div>{error.toString()}</div>;
    }

    return <>{content}</>;
};