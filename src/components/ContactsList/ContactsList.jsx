import React from 'react';

export default function ContactsList({ contacts, deleteContacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}</span>:<span>{contact.number}</span>
            <button onClick={() => deleteContacts(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
