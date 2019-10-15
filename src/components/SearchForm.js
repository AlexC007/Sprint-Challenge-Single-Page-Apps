import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
const [characters, setCharacters] = useState([]);
 const [search, setSearch] = useState([]);
 const [character, setCharacter] = useState (''); 
 const [filteredCharacters, setFilteredCharacters] = useState([]);
  
 useEffect(() => {
  const getCharacters= ()=> {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(info=> {
      console.log(info)
      setCharacters(info.data.results);
    })
    .catch(error => {
      console.error(error);
    });
  }
  getCharacters();
  }, [setCharacters]);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter(characters => character.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

const onSearchChange =e => {
  const {value} =e.target;
  setSearch(value);
};


const characterArray = filteredCharacters.length ? filteredCharacters : characters;
console.log(characters);


  return (
    
    <section className="search-form">
    <h1>Look for Characters here</h1>
    <form>
    <input  placeholder= 'Search For Names Here' value ={search} onChange={onSearchChange}/>
    <button type= 'submit'>Search</button>
    </form>
    <div>
      {characterArray.map((character, index)=>(
        <p key ={index}></p>
      ))}
    </div>
    </section>
  );
}
