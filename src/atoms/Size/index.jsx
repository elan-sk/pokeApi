export default function Size({height, weight}) {
  const classComponent = 'Size'
  const classes = [
    classComponent,
    ''
  ].join(' ')

  return (
    <div className={classes}>
      <h3>Dimensiones</h3>
      <div className="row">
        <div className="col-6">
          <h4>Alto</h4>
          <p>{`${(height * 0.1).toFixed(2)}m`}</p>
        </div>
        <div className="col-6">
          <h4>Peso</h4>
          <p>{`${(weight * 0.1).toFixed(1)}kg`}</p>
        </div>
      </div>
    </div>
  )
}
