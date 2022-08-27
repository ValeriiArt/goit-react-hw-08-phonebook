import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchContacts} from '../../redux/contacts/contactsApi'
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import Filter from "components/Filter";
import ContactItem from "../ContactItem/ContactItem";
import s from './ContactList.module.css'


const ContactList = () => {
  const { getContacts, getFilter } = contactsSelectors;
  const dispatch = useDispatch();
  const data = useSelector(getContacts);
  const filter = useSelector(getFilter);

  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const findContact = useMemo(() => {
    
    const result = data?.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    return result ?? [];
  }, [data, filter]);


  return (
    <div className={s.contactList} >
      <Filter/>
      <h3 className={s.contactListTitle} >My contacts</h3>
        {findContact.length > 0 ?
          <ul>
          {findContact.map(contact =>
            <ContactItem key={contact.id} {...contact} />
          )}
          </ul> :
        <p>🫥 </p>
        } 
    </div>
  )
};

export default ContactList;
