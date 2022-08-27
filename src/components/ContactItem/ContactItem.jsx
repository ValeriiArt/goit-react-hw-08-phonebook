import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import {deleteContact} from '../../redux/contacts/contactsApi'
import s from './ContactItem.module.css'



const ContactItem = ({id, name, number }) => {
  
  const dispatch = useDispatch();
    const handleDeleteContact = async (id) => {
        await dispatch(deleteContact(id)).unwrap();
    }

    return (
        <li className={s.contactItem} >
            <p className={s.itemText}>{name}:</p>
            <p className={s.itemText}>{number}</p>
            <span className={s.delete}
                onClick={() => handleDeleteContact(id)}
            >
                &times;
            </span>
        </li>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
export default ContactItem;