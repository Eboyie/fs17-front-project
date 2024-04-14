import React from 'react';
import { Form } from 'react-router-dom';

function Filters() {
  const [search, setSearch] = React.useState('');

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <div className="flex justify-between">
        <input
          type="text"
          value={search}
          id="search"
          placeholder="Search for products"
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 rounded-md bg-neutral-200 px-4 py-2"
        />
        <button className="px-4 py-2">Search</button>
      </div>
    </Form>
  );
}
export default Filters;
