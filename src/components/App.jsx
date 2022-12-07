import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1
        style={{
          fontSize: 40,
          color: '#1251cc',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: 40,
          color: '#1251cc',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
