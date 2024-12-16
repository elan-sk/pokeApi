export default function WaitingPokemon( {text}) {

  const classComponent = 'WaitingPokemon'
  const classes = [
    classComponent,
  ].join(' ')

  return (
    <div className={classes}>
      {text}
    </div>
  )
}
