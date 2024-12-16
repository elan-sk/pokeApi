import { Link } from "react-router-dom"
export default function EmptyFavorite() {

  const classComponent = 'EmptyFavorite'
  const classes = [
    classComponent,
  ].join(' ')

  return (
    <Link className={classes} to='/'>
      No tiene ningún pokemon como Favorito...
    </Link>
  )
}
