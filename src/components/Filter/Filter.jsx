import { useDispatch } from "react-redux";
import {filterContact} from '../../redux/contacts/contacts-slice'
// import contactsSelectors  from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css'

const Filter = () => {
    // const filterValue = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();
    const findContact = (e) => dispatch(filterContact(e.target.value));
        
    return (
        <div>
            <label>
                <input
                    className={s.formInput}
                    name='filter'
                    type="text"
                    placeholder="Find contacts by name"
                    // value={filterValue}
                    onChange={findContact}
                />
            </label>
        </div>
    );
}


export default Filter;
