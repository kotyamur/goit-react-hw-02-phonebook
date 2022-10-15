export const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);
