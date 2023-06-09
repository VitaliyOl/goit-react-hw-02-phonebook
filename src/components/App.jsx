import React, { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contact => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contact`);
      return;
    }

    this.setState(prevState => {
      console.log(this.state.contacts);
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContacts = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const getContacts = this.state.filter.toLowerCase();

    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(getContacts)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={getContacts} handleChange={this.handleChange} />
        <ContactsList
          contacts={filterContact}
          deleteContacts={this.deleteContacts}
        />
      </Container>
    );
  }
}
