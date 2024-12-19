import './index.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import CardEvolution from '../CardEvolution'

export default function Evolutions({ id }) {
  const { getEvolutionsLine, allPokemons } = useContext(AppContext);
  const [evolutionUrls, setEvolutionUrls] = useState(null);
  const [idsEvolutionLine, setIdsEvolutionLine] = useState([]);

  useEffect(() => {
    const fetchEvolutions = async () => {
      try {
        const evolutions = await getEvolutionsLine(allPokemons);
        setEvolutionUrls(Array.from(evolutions)); // Guardar las evoluciones en el estado
      } catch (error) {
        console.error("Hubo un error al obtener las evoluciones:", error);
      }
    };

    fetchEvolutions();
  }, [getEvolutionsLine, allPokemons]);


  useEffect(() => {
    const myEvolutionUrl = evolutionUrls?.find(evolution => evolution.id === id );
    if (myEvolutionUrl) {
      setIdsEvolutionLine ( evolutionUrls?.filter(evolution =>
        evolution.evolutionChainUrl === myEvolutionUrl.evolutionChainUrl
      ))
    }
  }, [evolutionUrls])

  const evolutions = idsEvolutionLine.map(({id}) => (
    <CardEvolution key={id} id={id}/>
  ))

  const classComponent = 'Evolutions';
  const classes = [
    classComponent,
    'mb-3'
  ].join(' ');

  return (
    <div className={classes}>
      <h4>Evoluciones</h4>
      <div className="d-flex justify-content-center gap-3">
        {evolutions}
      </div>
    </div>
  );
}
