import { useContext } from 'react'
import { AppContext } from '../../AppContext';
import CardPokemon from '../../components/CardPokemon';

export default function Home() {
  const { allPokemons } = useContext(AppContext)

  const pokemons = allPokemons.map((pokemon) =>
    <CardPokemon  key={pokemon.id} card={pokemon} page={'/pokemon'}/>
  )

  const classComponent = 'AllPokemon'
  const classes = [
    classComponent,
    'row'
  ].join(' ')

  return (
    <>
      <h1>Home</h1>
      <ul className={classes}>
        { pokemons }
      </ul>
    </>
  )
}
