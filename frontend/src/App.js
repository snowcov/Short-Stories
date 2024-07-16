import './App.css';
import {galacticRailroad} from './Stories/galacticRailroad.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="center-Container">
          <p>
            {galacticRailroad}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
