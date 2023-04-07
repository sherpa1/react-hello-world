import './App.css';
import Hello from './components/Hello';
import Bonjour from './components/Bonjour';
import Meteo from './components/Meteo';

function App() {

  const people = [
    { name: "Douaa", id: 1 },
    { name: "Marie", id: 2 },
    { name: "Adrien", id: 3 },
    { name: "Adella", id: 4 },
    { name: "Anthony", id: 5 },
    { name: "Clara", id: 6 },
    { name: "Marie", id: 7 },
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
