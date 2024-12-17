import './index.css'
import { Link } from "react-router-dom"

export default function EmptyFavorite() {
  const classComponent = 'EmptyFavorite'
  const classes = [
    classComponent,
    'AllPokemon row'
  ].join(' ')

  return (
    <Link className={classes} to='/'>
      No tiene ningún pokemon como Favorito...
    </Link>
  )
}
