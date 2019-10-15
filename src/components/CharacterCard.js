import React from "react";

export default function CharacterCard(props) {
      
  return (
    <div className= 'character-card'>
        <h5>Name:{props.name}</h5>
        <p>Gender: {props.gender}</p>
        <img src> Image: {props.image} </img>
        <p>Status:{props.status}</p>

      </div>
  );
}
