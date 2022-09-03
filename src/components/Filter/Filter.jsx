import * as React from 'react';
import { useDispatch } from "react-redux";
import { filterContact } from '../../redux/contacts/contacts-slice'
import TextField from '@mui/material/TextField';
// import contactsSelectors  from '../../redux/contacts/contacts-selectors';


const Filter = () => {
    // const filterValue = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();
    const findContact = (e) => dispatch(filterContact(e.target.value));
        
    return (
        <div>
            <TextField
                 
                id="standard-basic"
                label="Find contacts by name"
                variant="standard"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                name='filter'
                type="text"
                onChange={findContact}
            />

        </div>
    );
}


export default Filter;
