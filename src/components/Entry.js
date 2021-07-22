const Entry = (props) => {
  const entry = props.data;

  /*
    "id": 2,
    "first_name": "Ewen",
    "last_name": "McLewd",
    "email": "emclewd1@bbb.org",
    "date_of_birth": "15/12/1991",
    "industry": "Telecommunications Equipment",
    "salary": 144392.9,
    "years_of_experience": 2.8
  */
  const { id, first_name, last_name, email, date_of_birth, industry, salary, years_of_experience } = entry;

  return (
    <div className="Entry">
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
    </div>
  );
};

export default Entry;
