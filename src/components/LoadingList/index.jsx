import './index.css'

export default function LoadingList() {
  const classComponent = 'LoadingList'
  const classes = [
    classComponent,
  ].join(' ')
  return (
    <div className={classes}>
      {/* From Uiverse.io by doniaskima  */}
      <div className={`${classComponent}__loader`}></div>
      <div className={`${classComponent}__message`}>
        Loading...
      </div>
    </div>
  )
}

