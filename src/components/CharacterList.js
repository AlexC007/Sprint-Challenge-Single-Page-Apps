import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const H5= styled.h5 `
font-size: 20px;`


export default function CharacterList(props) {

  // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([]);
   

  useEffect(() => {
  const getCharacters= ()=> {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(info=> {
      console.log(info)
      setCharacter(info.data.results);
    })
    .catch(error => {
      console.error(error);
    });
  }
  getCharacters();
  }, []);

  return (
    
    <div>
      <SearchForm/>
    <section className="character-list">
      <p>{character.map((info,i)=> {
        return(
          <div className= 'character-card'>
            
            <H5> Name: {info.name} </H5>
            <p>  Gender:{info.gender} </p>
            <p> Status: {info.status} </p>
          </div>
      
        )
      }
      
        )}</p>
    </section>
    <Link to={`/`}> <p>  CLICK HERE TO GO BACK HOME </p> </Link>
    </div>
   
  );
 
}
