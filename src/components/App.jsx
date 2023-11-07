import React, { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
//import { setContactList } from '../redux/store';

import { fetchContacts } from '../redux/contacts/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        width: 400,
        marginLeft: '8px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ContactFilter />
      <ContactList />
    </div>
  );
};
