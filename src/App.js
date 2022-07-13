import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { PageLayout } from './components/PageLayout/PageLayout';
import { PokemonListScreen } from './screens/PokemonListScreen/PokemonListScreen';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { PokemonDisplayScreen } from './screens/PokemonDisplayScreen/PokemonDisplayScreen';
import { ErrorScreen } from './screens/ErrorScreen/ErrorScreen';
import { LegendariesScreen } from './screens/LegendariesScreen/LegendariesScreen';
import { AboutmeScreen } from './screens/AboutmeScreen/AboutmeScreen';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout FooterBackgroundColor="#f2b807">
                <HomeScreen />
              </PageLayout>
            }
          />
          <Route
            path="/PokeDex"
            element={
              <PageLayout FooterBackgroundColor="white">
                <PokemonListScreen />
              </PageLayout>
            }
          />
          <Route
            path="/pokemonDisplay"
            element={
              <PageLayout>
                <PokemonDisplayScreen />
              </PageLayout>
            }
          />
          <Route
            path="/legendaries"
            element={
              <PageLayout FooterBackgroundColor="#f2b807">
                <LegendariesScreen />
              </PageLayout>
            }
          />
          <Route
            path="/aboutme"
            element={
              <PageLayout PageLayout FooterBackgroundColor="white">
                <AboutmeScreen />
              </PageLayout>
            }
          />
          <Route
            path="*"
            element={
              <PageLayout withFooter={false}>
                <ErrorScreen />
              </PageLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
