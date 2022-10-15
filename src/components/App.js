import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  changeInput = e => {
    this.setState({ name: e.currentTarget.value });
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    this.addContact(name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.changeInput}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
