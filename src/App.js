import React, { useState } from 'react';
import './styles/App.min.css';
import Entry from './components/Entry';
import Button from './components/Button';

const App = () => {
  const data = require('./MOCK_DATA.json');

  const [viewId, setViewId] = useState(null);

  const handleView = (id) => {
    console.log(`View ${id}`);
    setViewId(id);
  };

  const handleViewAll = () => {
    setViewId(null);
  };

  const handleEdit = (id) => {
    console.log(`Edit ${id}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" alt="Colibri Digital" src="https://1dnz053xx1x848asdz1c4kr0-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/Registered-Logo-Transparent-1.png"></img>
        <h1>Tech Challenge</h1>
      </header>
      <main>
        {viewId ? (
          <section className="center">
            <h1>Viewing entry number {viewId}</h1>
            <Entry data={data.filter((entry) => entry.id === viewId)[0]} handleEdit={handleEdit} />
            <Button big icon="angle-left" onClick={() => handleViewAll()}>
              BACK TO THE ENTRIES LIST
            </Button>
          </section>
        ) : (
          data.map((entry, index) => <Entry key={index} data={entry} handleView={handleView} handleEdit={handleEdit} />)
        )}
      </main>
    </div>
  );
};

export default App;
