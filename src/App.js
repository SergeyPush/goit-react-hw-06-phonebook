import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactsList';
import AddContact from './components/AddContact';
import FilterSearch from './components/FilterSearch';
import { Container } from 'semantic-ui-react';

import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const value = localStorage.getItem('contacts');
      setContacts(JSON.parse(value));
    } catch (error) {}
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const unique = contacts.find(
      item => item.name.toLowerCase() === contact.name,
    );
    if (unique) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prev => [contact, ...prev]);
  };
  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <Container className="app">
      <AddContact addContact={contact => addContact(contact)} />
      <FilterSearch filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
