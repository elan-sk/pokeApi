import { useContext } from "react"
import { AppContext } from "../../AppContext"

export default function Type({ types }) {
  const { typeColors } = useContext(AppContext)
  const capitalize = text => text[0].toUpperCase() + text.slice(1)

  console.log(types)

  const typesPokemons = types.map((typePokemon, index) => (
    <span key={index} style={{ backgroundColor: typeColors[typePokemon.type.name] }}>
      {capitalize(typePokemon.type.name)}
    </span>
  ))

  const classComponent = 'Type'
  const classes = [classComponent].join(' ')

  return (
    <div className={classes}>
      <div className="d-flex justify-content-center">
        {typesPokemons}
      </div>
    </div>
  )
}
