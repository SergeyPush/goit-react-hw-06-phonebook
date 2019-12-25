import React from 'react';
import ContactItem from './ContactItem';
import { List, Segment } from 'semantic-ui-react';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <Segment basic>
      <List>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </List>
    </Segment>
  );
};

export default ContactsList;
