import React from "react";
import Header from "./components/Header.js";
import CharactersList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
//import CharacterCard from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Header />
      <CharactersList />
    </main>
  );
}
