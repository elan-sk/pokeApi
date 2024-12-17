import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ButtonFavorite from '../../atoms/ButtonFavorite'
import Type from '../../atoms/Type'

export default function CardPokemon({ card, page, animated }) {
  const { id, name, types, sprites: { front_default } } = card
  const { favorites, toggleFavorite } = useContext(AppContext)
  const isFavorite = favorites.includes(id)
  const urlImage = animated ? animated : front_default

  const classComponent = 'CardPokemon'
  const classes = [
    classComponent,
    'col-lg-4'
  ].join(' ')

  return (
    <li className={classes}>
      {page ? (
        <Link to={`${page}/${id}`}>
          <span>#{id}</span>
          <img src={urlImage} alt={name} />
          <h3>{name}</h3>
          <Type types={types} />
        </Link>
      ) : (
        <>
          <span>#{id}</span>
          <img src={urlImage} alt={name} />
          <h3>{name}</h3>
          <Type types={types} />
        </>
      )}
      <ButtonFavorite isFavorite={isFavorite} onClick={() => toggleFavorite(id)} />
    </li>
  )
}
