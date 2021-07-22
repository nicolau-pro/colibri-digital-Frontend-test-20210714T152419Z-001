import './styles/App.min.css';
import Entry from './components/Entry';

const App = () => {
  const data = require('./MOCK_DATA.json');

  // console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" alt="Colibri Digital" src="https://1dnz053xx1x848asdz1c4kr0-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/Registered-Logo-Transparent-1.png"></img>
        <h1>Tech Challenge</h1>
      </header>
      <main>
        {data.map((entry, index) => (
          <Entry key={index} data={entry} />
        ))}
      </main>
    </div>
  );
};

export default App;
