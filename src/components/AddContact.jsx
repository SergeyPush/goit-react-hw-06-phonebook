import React, { useState } from 'react';
import shortid from 'shortid';
import T from 'prop-types';
import { Input, Button, Header, Segment } from 'semantic-ui-react';

const AddContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    addContact({
      id: shortid.generate(),
      name,
      phone,
    });
    setName('');
    setPhone('');
  };

  return (
    <Segment basic>
      <form onSubmit={handleSubmitForm}>
        <Header as="h2">Add contact</Header>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="off"
        />

        <Input
          placeholder="Phone"
          type="number"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          autoComplete="off"
        />

        <Button primary type="submit">
          Add
        </Button>
      </form>
    </Segment>
  );
};

AddContact.propTypes = {
  addContact: T.func.isRequired,
};

export default AddContact;
