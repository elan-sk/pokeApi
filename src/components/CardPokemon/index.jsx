import './index.css'
import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ButtonFavorite from '../../atoms/ButtonFavorite'
import Type from '../../atoms/Type'
import { Fade } from "react-awesome-reveal";


export default function CardPokemon({ card, page, animated }) {
  const { id, name, types, sprites: { front_default } } = card
  const { favorites, toggleFavorite } = useContext(AppContext)
  const isFavorite = favorites.includes(id)
  const urlImage = animated ? animated : front_default
  const capitalize = text => text[0].toUpperCase() + text.slice(1)


  const classComponent = 'CardPokemon'
  const classes = [
    classComponent,
    'col-6 col-lg-4'
  ].join(' ')

  return (
    <li className={page ? classes : classComponent}>
      <Fade triggerOnce>
        {page ? (
          <div className={`${classComponent}__wrapper`}>
            <Link to={`${page}/${id}`}>
              <span className={`${classComponent}__number`}>#{id}</span>
              <figure>
                <img src={urlImage} alt={name} />
              </figure>
              <h3>{capitalize(name)}</h3>
              <Type types={types} />
            </Link>
            <ButtonFavorite isFavorite={isFavorite} onClick={() => toggleFavorite(id)} />
          </div>
        ) : (
          <div className={`${classComponent}__wrapper`}>
            <span className={`${classComponent}__number`}>#{id}</span>
            <figure>
              <img src={urlImage} alt={name} />
            </figure>
            <ButtonFavorite isFavorite={isFavorite} onClick={() => toggleFavorite(id)} />
          </div>
        )}
      </Fade>
    </li>
  )
}
