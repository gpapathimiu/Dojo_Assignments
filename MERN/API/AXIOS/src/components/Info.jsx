import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'


function Info() {

  const [pokemonData, setPokemonData] = useState([]);
    useEffect(()=>{
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response)=> {
              setPokemonData(response.data.results);
              })
            .catch((err)=> console.log(err));
            }, []);

  return (
    <div>
    <button>Gotta Catch 'Em All!</button>
    <ul>
    {pokemonData.map((pokemon, index) => (
    <li key={index} style={{listStyleType: 'none', lineHeight: '2', fontSize: '20px'}}>♯{index +1} {pokemon.name}</li>
    ))}
    </ul>
    </div>
  )
}

export default Info