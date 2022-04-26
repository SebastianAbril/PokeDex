import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
/* import { Nav } from './components/Nav/Nav'; */
/* import { PokemonListScreen } from './screens/PokemonListScreen/PokemonListScreen'; */
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
/* import { PokemonDisplayScreen } from './screens/PokemonDisplayScreen/PokemonDisplayScreen'; */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeScreen />
      </div>
    </BrowserRouter>
  );
}

export default App;
