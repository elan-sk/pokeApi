import './index.css'
import { AppContext } from '../../AppContext';
import { useContext } from "react";
import ButtonBackSvg from './ButtonBackSvg'

export default function ButtonBack() {
  const { handleGoBack } = useContext(AppContext);

  const classComponent = 'ButtonBack'
  const classes = [
    classComponent,
  ].join(' ')

  return (
    <button onClick={handleGoBack} className={classes}>
      <ButtonBackSvg />
    </button>
  )
}
