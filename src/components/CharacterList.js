import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

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
    <section className="character-list">
      <p>{character.map((info,i)=> {
        return(
          <div className= 'character-card'>
            <h5> Name: {info.name} </h5>
            <p>  Gender:{info.gender} </p>
            <p> Status: {info.status} </p>
          </div>

        )
      }
      
        )}</p>
    </section>
    </div>
  );
 
}
