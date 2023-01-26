import css from './NameContactsList.module.css';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const NameContactsList = () => {
  const dispatch = useDispatch();
  const contactsItem = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);
  console.log(contactsItem);
  // const normalizedFilter = filterValue.toString().toLowerCase();
  const visibleContacts = contactsItem.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <div className={css.contacts}>
      {visibleContacts.length > 0
        ? visibleContacts.map(item => {
            const { id, name, number } = item;
            return (
              <li key={id}>
                <div className={css.item__content}>
                  {name}: {number}
                  <button
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        : null}
    </div>
  );
};
