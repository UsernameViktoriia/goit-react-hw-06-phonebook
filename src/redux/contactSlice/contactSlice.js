import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      const prevContacts = action.payload;
      const finalContact = { ...prevContacts, id: nanoid() };
      if (
        state.contacts.find(
          cont => cont.name.toLowerCase() === finalContact.name.toLowerCase()
        )
      ) {
        alert(`${finalContact.name} is already in contacts`);
        return;
      }
      state.contacts = [finalContact, ...state.contacts];
    },
    deleteContact(state, action) {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
