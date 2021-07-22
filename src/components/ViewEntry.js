import React from 'react';

import Entry from './Entry';
import Button from './Button';

const ViewEntry = (props) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const id = parseInt(params.id);

  return (
    <section className="center">
      <h1>Viewing entry number {id}</h1>
      <Entry data={props.data.filter((entry) => entry.id === id)[0]} handleEdit={props.handleEdit} />
      <Button big icon="angle-left" onClick={props.handleViewAll}>
        BACK TO THE ENTRIES LIST
      </Button>
    </section>
  );
};

export default ViewEntry;
