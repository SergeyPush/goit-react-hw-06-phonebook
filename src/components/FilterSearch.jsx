import React from 'react';
import { Input } from 'semantic-ui-react';
import { Header, Segment } from 'semantic-ui-react';
const FilterSearch = ({ filter, setFilter }) => {
  return (
    <Segment basic>
      <Header as="h2">Search contact:</Header>
      <Input
        placeholder="Search"
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        id="search"
        autoComplete="off"
      />
    </Segment>
  );
};

export default FilterSearch;
