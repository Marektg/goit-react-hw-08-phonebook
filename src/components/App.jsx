import ContactForm from "./contactForm";
import { ContactList } from "./contactList";
import FilteredUsers from "./filteredUsers";


const App = () => {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ContactForm />
      <FilteredUsers />

      <ContactList />

    </div>
  );
};

export default App;
