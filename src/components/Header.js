import Button from './Button';

const Header = (props) => {
  return (
    <header>
      <img className="logo" alt="Colibri Digital" src="https://1dnz053xx1x848asdz1c4kr0-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/Registered-Logo-Transparent-1.png"></img>
      <h1>Tech Challenge</h1>
      <div>
        <Button icon="data" onClick={props.handleViewAll}>
          ENTRIES
        </Button>
        <Button icon="pie-chart" onClick={props.handleViewGraphs}>
          GRAPHS
        </Button>
      </div>
    </header>
  );
};

export default Header;
