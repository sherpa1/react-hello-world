import './App.css';
import Hello from './components/Hello';
import Bonjour from './components/Bonjour';
import Meteo from './components/Meteo';

function App() {
  return (
    <div className="App">
      <Hello />
      <Bonjour prenom="Alex" />
      <Meteo temps="Pluie" />
    </div>
  );
}

export default App;
