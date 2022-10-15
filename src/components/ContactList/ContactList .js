import { ContactItem } from '../ContactItem/ContactItem';
export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
        id={id}
      />
    ))}
  </ul>
);
