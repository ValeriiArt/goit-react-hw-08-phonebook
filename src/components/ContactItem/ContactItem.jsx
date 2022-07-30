// import PropTypes from 'prop-types';

import s from './ContactItem.module.css'



const ContactItem = ({ id, name, number }) => {
  

    const handleDeleteContact = async (id) => {
        await deleteContact(id).unwrap();
    }

    return (
        <li key={id}>
            <p className={s.itemText}>{name}:</p>
            <p className={s.itemText}>{number}</p>
            <span className={s.delete}
                onClick={()=>handleDeleteContact(id)}>
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