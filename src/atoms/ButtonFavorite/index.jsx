import StarEmptySvg from './StarEmptySvg'
import StarFullSvg from './StarFullSvg'

export default function Button({isFavorite, onClick }) {
  return (
    <button onClick={onClick}>
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
