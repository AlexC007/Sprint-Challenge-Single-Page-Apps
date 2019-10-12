import React from "react";
import Header from "./components/Header.js";
import CharactersList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from './components/CharacterList';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path= '/' component= {WelcomePage}/>
      <Route path= '/characterList' component={CharactersList}/>
    
    </main>
  );
}
