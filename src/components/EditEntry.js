import React, { useState } from 'react';

import Button from './Button';

const EditEntry = (props) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const id = parseInt(params.id);
  const [data, setData] = useState(props.data.filter((entry) => entry.id === id)[0]);

  return (
    <div className="edit">
      <section className="center">
        <h1>Editing entry number {id}</h1>
        <form>
          <label>
            First name:
            <input type="text" value={data.first_name} onChange={(event) => setData({ ...data, first_name: event.target.value })} />
          </label>
          <label>
            Last name:
            <input type="text" value={data.last_name} onChange={(event) => setData({ ...data, last_name: event.target.value })} />
          </label>
          <label>
            Email:
            <input type="text" value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })} />
          </label>
          <label>
            Date of birth:
            <input type="date" value={data.date_of_birth.split('/').reverse().join('-')} onChange={(event) => setData({ ...data, date_of_birth: event.target.value.split('-').reverse().join('/') })} />
          </label>
          <label>
            Industry:
            <input type="text" value={data.industry} onChange={(event) => setData({ ...data, industry: event.target.value })} />
          </label>
          <label>
            Salary:
            <input type="number" step="0.01" min="0" value={data.salary} onChange={(event) => setData({ ...data, salary: event.target.value })} />
          </label>
          <label>
            Years of experience:
            <input type="number" step="0.01" min="0" value={data.years_of_experience} onChange={(event) => setData({ ...data, years_of_experience: event.target.value })} />
          </label>
        </form>
      </section>
      <section className="buttons">
        <Button big icon="angle-left" onClick={() => props.handleBack()}>
          BACK
        </Button>
        <Button big icon="floppy-disk" onClick={() => props.handleSaveEntry(id, data)}>
          SAVE
        </Button>
      </section>
    </div>
  );
};

export default EditEntry;
