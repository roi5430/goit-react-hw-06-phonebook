import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import css from './PhonebookForm.module.css';
import { addContact } from 'redux/contactsSlice';

export const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsSelector = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const checkName = contactsSelector.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!checkName) {
      const currentContact = { id: nanoid(), number, name };
      dispatch(addContact(currentContact));
    } else {
      window.alert(`${name} is already in contacts`);
    }
    setName('');
    setNumber('');
  };

  return (
    <div className={css.phonebook}>
      <form className={css.phonebook__form} onSubmit={handleSubmit}>
        <label className={css.phonebook__label}>
          Name
          <input
            className={css.phonebook__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label className={css.phonebook__label}>
          Numder
          <input
            className={css.phonebook__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <button className={css.phonebook__btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
