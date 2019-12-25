import React from 'react';
import { List } from 'semantic-ui-react';

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <List.Item>
      {contact.name} - {contact.phone}
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </List.Item>
  );
};

export default ContactItem;
