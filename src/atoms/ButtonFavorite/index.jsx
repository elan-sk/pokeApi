import './index.css'
import StarEmptySvg from './StarEmptySvg'
import StarFullSvg from './StarFullSvg'

export default function ButtonFavorite({isFavorite, onClick }) {
  const classComponent = 'ButtonFavorite'
  const classes = [
    classComponent,
    ''
  ].join(' ')
  return (
    <button onClick={onClick} className={classes}>
      {
        isFavorite ?
          <StarFullSvg /> :
          <StarEmptySvg />
      }
      <span>
        {
          isFavorite ?
            'Eliminar de Favoritos' :
            'Agregar a Favorito'
        }
      </span>
    </button>
  )
}
