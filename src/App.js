import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://https://bizsnap-crm-production.up.railway.app/api/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the contacts!", error);
      });
  }, []);

  return (
    <div>
      <h1>BizSnap CRM - Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
