import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== contactId));
  };

  const handleInput = event => {
    setFilter(event.target.value);
  };

  const onSubmit = values => {
    if (
      contacts.some(el => el.name.toLowerCase() === values.name.toLowerCase())
    ) {
      alert(`${values.name} is already in contacts`);
      return contacts;
    }

    setContacts(prevContacts => {
      values.id = uuidv4();
      return prevContacts.concat(values);
    });
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter handleInput={handleInput} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
