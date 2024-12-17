import './index.css'

export default function Size({height, weight}) {
  const classComponent = 'Size'
  const classes = [
    classComponent,
  ].join(' ')

  return (
    <div className={classes}>
      <h4>Tamaño</h4>
      <div className="row">
        <div className="col-6">
          <h5>Alto</h5>
          <p>{`${(height * 0.1).toFixed(2)}m`}</p>
        </div>
        <div className="col-6">
          <h5>Peso</h5>
          <p>{`${(weight * 0.1).toFixed(1)}kg`}</p>
        </div>
      </div>
    </div>
  )
}
