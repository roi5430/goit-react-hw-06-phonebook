import css from './NameContactsList.module.css';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const NameContactsList = () => {
  const dispatch = useDispatch();
  const contactsItem = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);
  console.log(contactsItem);
  // const normalizedFilter = filterValue.toLowerCase();
  const visibleContacts = contactsItem.filter(contact =>
    contact.name.toString().toLowerCase().includes(filterValue)
  );

  return (
    <div className={css.contacts}>
      <ul className={css.contacts__list}>
        {visibleContacts.map(item => {
          const { id, name, number } = item;
          return (
            <li key={id} id={id}>
              <div className={css.item__content}>
                {name}: {number}
                <button
                  className={css.contacts__btn}
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
