import { ContactItem } from '../ContactItem/ContactItem';
import { Container } from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => (
  <Container>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
        id={id}
      />
    ))}
  </Container>
);
