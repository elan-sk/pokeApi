import { AppContext } from '../../AppContext';
import { useContext } from "react";
import ButtonBackSvg from './ButtonBackSvg'

export default function ButtonBack() {
  const { handleGoBack } = useContext(AppContext);
  return (
    <button onClick={handleGoBack}>
      <ButtonBackSvg />
    </button>
  )
}
