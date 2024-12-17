import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import CardPokemon from '../../components/CardPokemon'
import LoadingList from '../../components/LoadingList'

export default function Home() {
  const { allPokemons, loadingPokemons: loading } = useContext(AppContext)

  const pokemons = allPokemons.map((pokemon) =>
    <CardPokemon key={pokemon.id} card={pokemon} page={'/pokemon'} />
  )

  const classComponent = 'Home'
  const classes = [
    classComponent,
    'AllPokemon row'
  ].join(' ')

  return (
    <div className={classes}>
      <h1>Home</h1>
      {loading ? (
        <LoadingList />
        ) : (
          <>
            <ul className='row'>
              {pokemons}
            </ul>
          </>
        )
      }
    </div>
  )
}
