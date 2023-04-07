import './App.css';
import Hello from './components/Hello';
import Bonjour from './components/Bonjour';
import Meteo from './components/Meteo';

function App() {

  const people = [
    { name: "Douaa" },
    { name: "Marie" },
    { name: "Adrien" },
    { name: "Adella" },
    { name: "Anthony" },
    { name: "Clara" },
    { name: "Marie" },
  ];


  return (
    <div className="App">

      {people.map((item, index) => <Bonjour key={index} prenom={item.name} />)}

      <Hello />

      <Bonjour prenom="Alex" />

      <Meteo temps="Pluie" />
    </div>
  );
}

export default App;
