import './index.css'

export default function NotFindPokemon( {text}) {
  const classComponent = 'NotFindPokemon'
  const classes = [
    classComponent,
    'AllPokemon d-flex justify-content-center align-items-center'
  ].join(' ')

  return (
    <h3 className={classes}>
      {text}
    </h3>
  )
}
