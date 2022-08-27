import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsApi';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import {NotificationManager} from 'react-notifications';



const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function ContactForm() {
  const { getContacts } = contactsSelectors;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)
 

  const handleChange= e => {
    const { name, value } = e.currentTarget;  
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) 
      ? NotificationManager.info(`${name} вже є у ваших контактах`)
      : dispatch(addContact({name, number}));
      setName('');
      setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
        Name
            <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label style={styles.label}>
          Number
            <input
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>      
    </div>
  );  
};
