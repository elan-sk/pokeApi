import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetData } from './hooks/useGetData'
import { useGoBack } from './hooks/useGoBack'
import { useLocalStorage } from './hooks/useLocalStorage';

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const URLAPI = 'https://pokeapi.co/api/v2/'
  const parameterLimit = 'pokemon?limit=20'
  const handleGoBack = useGoBack(useNavigate());
  const {
    data:allPokemons,
    loading:loadingPokemons, error:errorPokemons
  } = useGetData( URLAPI + parameterLimit, 'url')

  const {
    item: favorites, saveItem: saveFavorites,
    loading:loadingFavorites, error:errorFavorites
  } = useLocalStorage('FavoritesPokemons', []);

  const getPokemon = (id) => {
    try {
      const pokemon = allPokemons.find((pokemon) => pokemon.id === id);
      return pokemon || false;
    } catch (error) {
      console.error(`Error al buscar el Pokémon con ID ${id}:`, error);
      return false;
    }
  }

  const highestStats = {
    hp: 0,
    attack: 0,
    defense: 0,
    'special-attack': 0,
    'special-defense': 0,
    speed: 0,
  }


  const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
  };


  allPokemons.forEach(pokemon => {
    pokemon.stats.forEach(stat => {
      if (stat.base_stat > highestStats[stat.stat.name]) {
        highestStats[stat.stat.name] = stat.base_stat
      }
    })
  })

  const toggleFavorite = (id) => {
    favorites.includes(id) ?
      saveFavorites(favorites.filter( favorite => favorite !== id)) :
      saveFavorites([...favorites, id])
  }

  return (
    <AppContext.Provider value={{
      allPokemons, getPokemon,loadingPokemons, errorPokemons,
      favorites, toggleFavorite, loadingFavorites, errorFavorites,
      highestStats, typeColors,
      handleGoBack
    }}>
      {children}
    </AppContext.Provider>
  )
}
