import React from 'react';
import T from 'prop-types';
import { List, Button } from 'semantic-ui-react';

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <List.Item>
      <List.Content floated="right">
        <Button
          size="tiny"
          color="red"
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </Button>
      </List.Content>
      <List.Icon name="user outline" />
      <List.Content>
        {contact.name} - {contact.phone}
      </List.Content>
    </List.Item>
  );
};

ContactItem.propTypes = {
  contact: T.object.isRequired,
  deleteContact: T.func.isRequired,
};

export default ContactItem;
