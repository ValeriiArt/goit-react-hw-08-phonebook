import { createSlice } from "@reduxjs/toolkit";
import {
    fetchContacts,
    addContact,
    deleteContact,
} from './contactsApi';

const initialState = {
    items: [],
    error: null,
    filter: '',
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    
    reducers: {
        filterContact: (state, action) => {
            state.filter = action.payload;
        }
    },
    
    extraReducers: {
        [fetchContacts.pending](state, action) {},
        [fetchContacts.fulfilled](state, action) {
            state.items = action.payload;   
        },
        [fetchContacts.rejected](state, action) { 
            state.error = action.payload; 
        },
        
        [addContact.pending](state, action) {},
        [addContact.fulfilled](state, action) {
            // state.items = push(action.payload); 
         },
        [addContact.rejected](state, action) { 
            state.error = action.payload; 
        },

        [deleteContact.pending](state, action) {},
        [deleteContact.fulfilled](state, action) {
            state.items = state.items.filter(
                contact => contact.id !== action.payload
            );   
        },
        [deleteContact.rejected](state, action) { 
            state.error = action.payload; 
        },
    },
});


export const { filterContact } = contactsSlice.actions;
export default contactsSlice.reducer;


