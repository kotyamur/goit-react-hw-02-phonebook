import { Container, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <Container>
    <p>
      {name}: {number}
    </p>
    <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
  </Container>
);
