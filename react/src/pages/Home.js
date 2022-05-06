import React,  { useState, useEffect } from 'react'

const Home = () => {
  const { pokemons, setPokemons } = useState([])

  const getPokemons = (offset = 0) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
      .then(response => response.json())
      .then(data => setPokemons([...pokemons, ...data.results]))
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div>
      {
        pokemons.length && 
        pokemons.map(pokemon => (<a href={pokemon.url}>{pokemon.name}</a>))
      }
    </div>
  )
}

export default Home