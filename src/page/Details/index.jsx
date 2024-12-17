import { useParams, useLocation } from 'react-router-dom';
import { useContext } from 'react'
import { AppContext } from '../../AppContext';
import CardDetails from '../../components/CardDetails'
import NotFindPokemon from '../../components/NotFindPokemon'

export default function Details() {
  const id = + useParams().id;
  const location = useLocation();
  const { getPokemon, favorites } = useContext(AppContext)

  const isPathDetails = location.pathname.startsWith("/pokemon/");
  const isPathFavorites = location.pathname.startsWith("/favorito/");
  const isFavorite = favorites.includes(id)
  const isPokemon = getPokemon(id) ? true : false
  const pokemon = getPokemon(id)

  return (
    <>
      {isPathDetails && (
        isPokemon && <CardDetails card={pokemon} /> ||
        !isPokemon && <NotFindPokemon text={'¡Pokemon no encontrado!'} />
      ) ||
        isPathFavorites && (
          isFavorite && <CardDetails card={pokemon} /> ||
          !isFavorite && <NotFindPokemon text={'¡Pokemon no encontrado en favoritos!'} />
        ) ||
        <NotFindPokemon text={'¡Selecciona un pokemon!...'} />
      }
    </>
  )
}
