import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/index';
import { Nav } from './components/Nav/Nav';
import { PokemonListScreen } from './screens/PokemonListScreen/PokemonListScreen';
/* import { PokemonDisplayScreen } from './screens/PokemonDisplayScreen/PokemonDisplayScreen'; */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />

        <PokemonListScreen />
        {/* <PokemonDisplayScreen /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
