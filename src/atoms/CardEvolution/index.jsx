import './index.css'
import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function CardEvolution({ id }) {
  const { getPokemon } = useContext(AppContext)
  // console.log(id)
  const pokemon = getPokemon(id)
  const { name, sprites: { front_default } } = pokemon

  // console.log(pokemon)
  const capitalize = text => text[0].toUpperCase() + text.slice(1)
  const page = '/pokemon'


  const classComponent = 'CardEvolution'
  const classes = [
    classComponent,
    ''
  ].join(' ')

  return (
    <li className={classes}>
        <div className={`${classComponent}__wrapper`}>
          <Link to={`${page}/${id}`}>
            <figure className='m-0'>
              <img src={front_default} alt={name} />
            </figure>
            <h5>{capitalize(name)}</h5>
          </Link>
        </div>
    </li>
  )
}
