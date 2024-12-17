import { useContext } from 'react'
import { AppContext } from '../../AppContext';
import CardPokemon from '../../components/CardPokemon';
import EmptyFavorite from '../../components/EmptyFavorite';

export default function Favorites() {
  const { getPokemon, favorites } = useContext(AppContext)

  const favoritesPokemons = favorites.map( idFavorite => {
    const pokemon = getPokemon(idFavorite)
    if (!pokemon) return null
    return <CardPokemon key={pokemon.id} card={pokemon} page={'/favorito'}/>
  })

  const classComponent = 'AllPokemon'
  const classes = [
    classComponent,
    'row'
  ].join(' ')

  return (
    <>
      <h1>Favoritos</h1>
      <ul className={classes}>
        { favoritesPokemons }
        { favorites.length === 0 && <EmptyFavorite /> }
      </ul>
    </>
  )
}
