import './index.css'
import { useGetData } from '../../hooks/useGetData'
import CardPokemon from '../CardPokemon';
import Description from '../../atoms/Description'
import Size from '../../atoms/Size'
import Stats from '../../atoms/Stats'
import Evolutions from '../../atoms/Evolutions'
import LoadingList from '../LoadingList'
import Type from '../../atoms/Type'
import { Slide } from "react-awesome-reveal";

export default function CardDetails({ card }) {
  if (!card) return
  const { id, name, types, sprites, species: { url: speciesUrl }, height, weight, stats } = card
  const animated = sprites.versions['generation-v']['black-white'].animated.front_default
  const capitalize = text => text[0].toUpperCase() + text.slice(1)

  const {
    data: { flavor_text_entries },
    loading
  } = useGetData(speciesUrl)

  const flavorTextsInSpanish = flavor_text_entries
    ?.filter(entry => entry.language.name === "es")
    .map(entry => entry.flavor_text)[0];

  const classComponent = 'CardDetails'
  const classes = [
    classComponent,
    ''
  ].join(' ')


  return (
    <div className={classes}>
      {loading ? (
        <LoadingList />
      ) : (
        <Slide
          key={id}
          direction="up"
          triggerOnce
        >
          <div className={`${classComponent}__wrapper`}>
            <CardPokemon key={id} card={card} animated={animated} />
            <h3>{capitalize(name)}</h3>
            <div className={`${classComponent}__text-content`}>
              <Type types={types} />
              <Description text={flavorTextsInSpanish} />
              <Size height={height} weight={weight} />
              <Stats stats={stats} />
              <Evolutions id={id}/>
            </div>
          </div>
        </Slide>
      )
      }
    </div>
  )
}
