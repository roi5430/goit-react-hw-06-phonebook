import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { NameContactsList } from './NameContactsList/NameContactsList';
import { Filter } from './Filter/Filter';
import React from 'react';

export const App = () => {
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
