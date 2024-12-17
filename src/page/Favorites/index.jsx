import { useContext } from 'react'
import { AppContext } from '../../AppContext';
import CardPokemon from '../../components/CardPokemon';
import EmptyFavorite from '../../components/EmptyFavorite';
import LoadingList from '../../components/LoadingList'

export default function Favorites() {
  const { getPokemon, favorites, loadingFavorites: loading } = useContext(AppContext)

  const favoritesPokemons = favorites.map(idFavorite => {
    const pokemon = getPokemon(idFavorite)
    if (!pokemon) return null
    return <CardPokemon key={pokemon.id} card={pokemon} page={'/favorito'} />
  })

  const classComponent = 'Favorites'
  const classes = [
    classComponent,
    'AllPokemon row'
  ].join(' ')

  return (
    <div className={classes}>
      <h1>Favoritos</h1>
      {loading ? (
        <LoadingList />
      ) : (
        <>
          <ul className='row align-content-start'>
            {favoritesPokemons}
            {favorites.length === 0 && <EmptyFavorite />}
          </ul>
        </>
      )
      }
    </div>
  )
}
