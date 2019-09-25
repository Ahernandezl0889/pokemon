import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Pokecard from './components/Pokecard'
// import Pokedex from './components/Pokedex';
import Pokegame from './components/Pokegame'
import Pokedex from './components/Pokedex';


function App() {
  return (
    <div className="App">

      {/* calling Pokecard Component
     <Pokecard
    
    // props of the component Pokecard
      id={4}
      name='Charmander'
      type="fire"
      exp={62}
      */}
     
     <Pokegame/>
     {/* /> */}
     
    </div>
  );
}
// props goes here on the component
export default App;
