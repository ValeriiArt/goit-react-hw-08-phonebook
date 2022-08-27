import ContactList from "components/ContactList";
import ContactForm from "components/ContactsForm/ContactsForm";



const styles = {
  contactTitle: {
    textAlign: 'center',
    marginBottom: 25,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
};

export default function Contacts() {
  
  return (
    <div>
        <h1 style={styles.contactTitle}>Welcom to phonebook👻</h1>
      <div style={styles.container}>
        <ContactForm />
        {/* {isLoadingContacts && <h2>Loading...</h2>} */}
        <ContactList />
      </div>
    </div>
  )
};
