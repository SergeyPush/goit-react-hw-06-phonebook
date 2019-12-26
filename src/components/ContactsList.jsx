import React from 'react';
import ContactItem from './ContactItem';
import { List, Segment } from 'semantic-ui-react';
import T from 'prop-types';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <Segment basic>
      <List
        relaxed
        verticalAlign="middle"
        size="big"
        style={{ width: '350px' }}
      >
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

ContactsList.propTypes = {
  contacts: T.array.isRequired,
  deleteContact: T.func.isRequired,
};

export default ContactsList;
