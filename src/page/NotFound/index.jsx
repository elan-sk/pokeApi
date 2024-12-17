import { Link } from 'react-router-dom'

export default function NotFound() {

  const classComponent = 'NotFound'

  const classes = [
    classComponent,
    'AllPokemon d-flex justify-content-center align-items-center'
  ].join(' ')

  return (
    <div className={classes}>
      <Link to={'/'} className='text-center'>
        <h1>Página no encontrada</h1>
        <h2 className='text-decoration'>Ir a home...</h2>
      </Link>
    </div>
  )
}
