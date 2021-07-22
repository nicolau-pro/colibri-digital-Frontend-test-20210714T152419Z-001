import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './styles/App.min.css';

import Header from './components/Header';
import Graphs from './components/Graphs';
import Entry from './components/Entry';
import ViewEntry from './components/ViewEntry';
import EditEntry from './components/EditEntry';

const App = () => {
  const history = useHistory();

  const [data, setData] = useState(require('./MOCK_DATA.json'));

  const handleBack = () => {
    console.log('<<< BACK');
    history.goBack();
  };

  const handleView = (id) => {
    history.push(`/view?id=${id}`);
  };

  const handleViewAll = () => {
    history.push(`/`);
  };

  const handleViewGraphs = () => {
    history.push(`/graphs`);
  };

  const handleEdit = (id) => {
    history.push(`/edit?id=${id}`);
  };

  const handleSaveEntry = (id, newData) => {
    console.log(id);
    console.table(newData);
    setData(data.map((entry) => (entry.id === id ? newData : entry)));
  };

  return (
    <div className="App">
      <Header handleViewAll={handleViewAll} handleViewGraphs={handleViewGraphs} />
      <main>
        <Route exact path="/">
          {data.map((entry, index) => (
            <Entry key={index} data={entry} handleView={handleView} handleEdit={handleEdit} />
          ))}
        </Route>

        <Route exact path="/graphs">
          <Graphs data={data} />
        </Route>

        <Route path="/view" children={<ViewEntry data={data} handleEdit={handleEdit} handleViewAll={handleViewAll} />} />

        <Route path="/edit" children={<EditEntry data={data} handleBack={handleBack} handleSaveEntry={handleSaveEntry} />} />
      </main>
    </div>
  );
};

export default App;
