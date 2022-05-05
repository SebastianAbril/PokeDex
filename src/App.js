import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav/Nav';
import { PokemonListScreen } from './screens/PokemonListScreen/PokemonListScreen';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { PokemonDisplayScreen } from './screens/PokemonDisplayScreen/PokemonDisplayScreen';
import { ErrorScreen } from './screens/ErrorScreen/ErrorScreen';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/PokeDex" element={<PokemonListScreen />} />
          <Route path="/pokemonDisplay" element={<PokemonDisplayScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
