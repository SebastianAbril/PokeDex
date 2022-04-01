import React from 'react';
import './App.css';
import {Header} from './components/Header/index';
import {Nav} from './components/Nav/index';
import {PokemonListScreen} from './screens/PokemonListScreen/PokemonListScreen';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <PokemonListScreen />
      
    </div>
  );
}

export default App;
