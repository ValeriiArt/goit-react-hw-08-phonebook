import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
      try {
          const { data } = await axios.get('/contacts');
          return data;
      }
      catch (error) {
          return thunkAPI.rejectWithValue(error);
    }
    },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
      try {
          const { data } = await axios.post('/contacts', contact);
          thunkAPI.dispatch(fetchContacts());
          return data;
      }
      catch (error) {
          return thunkAPI.rejectWithValue(error);
    }
    },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
      try {
          await axios.delete(`/contacts/${id}`);
          thunkAPI.dispatch(fetchContacts());
      }
      catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
    },
);

