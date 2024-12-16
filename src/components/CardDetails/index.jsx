import React from 'react'
import { useGetData } from '../../hooks/useGetData'
import CardPokemon from '../../components/CardPokemon';
import Description from '../atoms/Description'
import Size from '../atoms/Size'
import Stats from '../atoms/Stats'

export default function CardDetails ({ card }) {
  if (!card) return
  const { id, sprites, species:{url:speciesUrl}, height, weight, stats } = card
  const animated = sprites.versions['generation-v']['black-white'].animated.front_default

  const {
    data:{flavor_text_entries},
  } = useGetData( speciesUrl )

  const flavorTextsInSpanish = flavor_text_entries
  ?.filter(entry => entry.language.name === "es")
  .map(entry => entry.flavor_text)[0];



  const classComponent = 'CardPokemon'
  const classes = [
    classComponent,
    ''
  ].join(' ')


  return (
    <div className={classes}>
        <CardPokemon key={id} card={card} animated={animated} />
        <Description text={flavorTextsInSpanish} />
        <Size height={height} weight={weight}/>
        <Stats stats={stats}/>
    </div>
  )
}
