import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
    <h1>Look for Characters here</h1>
    
    <input
    type = 'text'
    id= 'search'
    onKeyUp= 'searchFunction()' 
    placeholder= 'Search For Characters Here'
  />
    <button onclick="myFunction()">Search</button>
    <script>
  </script>


    </section>
  );
}
