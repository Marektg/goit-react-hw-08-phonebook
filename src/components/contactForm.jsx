import { useAddContactMutation, useGetContactsQuery } from 'services/phonebookApi';
import styled from 'styled-components';

const FormCell = styled.div`
padding:5px;
display: flex;
  justify-content: flex-start;
  `;

const StylLabel = styled.label`
    margin-left: 15%;
    display: grid;
grid-template-columns: 30% 70%;
grid-gap:20px;
& input {
    width: 300px;
    margin-left:10px;
}
`;


const ContactForm = () => {
    const {
        data: contacts = [],
    } = useGetContactsQuery();
    const [addContact] = useAddContactMutation();

    const handleSubmit = async evt => {
        const form = evt.target;
        const name = form.name.value;
        const number = form.number.value;

        evt.preventDefault();

        for (const contact of contacts) {
            if (contact.name === name)
                return alert(
                    `${name} is already in your contacts with the phone number ${contact.number}`
                );

            if (contact.number === number)
                return alert(
                    `${number} is already in your contacts with the name ${contact.name}`
                );
        }
        try {
            await addContact({ name, number });
        }
        catch (error) {
            alert(`Failed to save contact ${name} in Phonebook!`);
        }
        form.reset();
    };

return (
    <form onSubmit={handleSubmit}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }
        }>
        <FormCell>
            <StylLabel>
                Name
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
                />
                </StylLabel>
        </FormCell>
        <FormCell>
            <StylLabel>
                Number
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
                />
                </StylLabel>
        </FormCell>
        <button style={{
            marginTop: "10px",
            fontSize: "12px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            cursor: "pointer",

        }} >Add contact</button>
    </form>


) 
};

export default ContactForm;