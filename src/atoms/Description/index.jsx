import './index.css'

export default function Description({text}) {
  const classComponent = 'Description'
  const classes = [
    classComponent,
  ].join(' ')

  return (
    <div className={classes}>
      <h4>Descripción</h4>
      <p>{text}</p>
    </div>
  )
}
