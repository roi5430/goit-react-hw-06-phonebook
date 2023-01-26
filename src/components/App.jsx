import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { NameContactsList } from './NameContactsList/NameContactsList';
import { Filter } from './Filter/Filter';
// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

// import { useDispatch, useSelector } from 'react-redux'; // eslint-disable-next-line
// import { addContact, deleteContact } from 'redux/contactsSlice';

export const App = () => {
  // const dispatch = useDispatch();
  // const contactsSelector = useSelector(state => state.contacts.items);
  // const filterSelector = useSelector(state => state.filter);

  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(() => {
  //   const mekeContacts = localStorage.getItem('contacts');
  //   if (mekeContacts !== null) {
  //     const parse = JSON.parse(mekeContacts);
  //     return parse;
  //   }
  //   return [];
  // });

  // const searchContact = evt => filterSelector(evt.currentTarget.value);

  // const deleteContact = contactsId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactsId)
  //   );
  // };

  // const addContact = (name, number) => {
  //   const checkName = contactsSelector.some(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   if (!checkName) {
  //     // setContacts(prevContact => [
  //     //   { id: nanoid(), number, name },
  //     //   ...prevContact,
  //     // ]);

  //     const currentContact = { id: nanoid(), number, name };
  //     dispatch(addContact(currentContact));
  //   } else {
  //     window.alert(`${name} is already in contacts`);
  //   }
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <section>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <NameContactsList />
    </section>
  );
};
