import React from 'react';
import T from 'prop-types';
import { Input, Header, Segment } from 'semantic-ui-react';
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

FilterSearch.propTypes = {
  filter: T.string.isRequired,
  setFilter: T.func.isRequired,
};

export default FilterSearch;
