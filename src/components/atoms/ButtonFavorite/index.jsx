export default function Button({isFavorite, onClick }) {
  return (
    <button onClick={onClick}>
      {
        isFavorite ?
          'Eliminar de Favoritos' :
          'Agregar a Favorito'
      }
    </button>
  )
}
