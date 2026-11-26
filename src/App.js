import logo from './logo.svg';
import './App.css';
import Dome from './components/Dome';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
      <Dome/>
    </div>
  );
}

export default App;
