import Button from './Button';

const Entry = (props) => {
  const entry = props.data;

  const { id, first_name, last_name, email, date_of_birth, industry, salary, years_of_experience } = entry;

  const handleView = props.handleView;
  const handleEdit = props.handleEdit;

  return (
    <div className="Entry">
      <section className="info">
        <ul>
          <li>
            <span className="field">First name:</span>
            {first_name || '-'}
          </li>
          <li>
            <span className="field">Last name:</span>
            {last_name || '-'}
          </li>
          <li>
            <span className="field">Email:</span>
            {email || '-'}
          </li>
          <li>
            <span className="field">Date of birth:</span>
            {date_of_birth || '-'}
          </li>
          <li>
            <span className="field">Industry:</span>
            {industry || '-'}
          </li>
          <li>
            <span className="field">Salary:</span>
            {salary || '-'}
          </li>
          <li>
            <span className="field">Years of experience:</span>
            {years_of_experience || '-'}
          </li>
        </ul>
        <h2 className="id">{id}</h2>
      </section>

      <section className="buttons">
        {handleView ? (
          <Button icon="eye" onClick={() => handleView(id)}>
            VIEW
          </Button>
        ) : null}
        <Button icon="edit" onClick={() => handleEdit(id)}>
          EDIT
        </Button>
      </section>
    </div>
  );
};

export default Entry;
