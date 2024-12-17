import './index.css'

import { AppContext } from '../../AppContext';
import { useContext } from 'react'
export default function Stats({ stats }) {
  const { highestStats } = useContext(AppContext);

  const shortStats = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SpA',
    'special-defense': 'SpD',
    speed: 'SPD'
  };

  const statsFormat = stats.map((stat, index) => (
    <li key={index} className="d-flex w-100">
      <h5>{shortStats[stat.stat.name]}</h5>
      <div>
        <span style={{ width: `${stat.base_stat / highestStats[stat.stat.name] * 100}%` }}></span>
      </div>
      <small>{stat.base_stat}</small>
    </li>
  ));
  const totalStats = stats.reduce((total, stat) => total + stat.base_stat, 0);

  const classComponent = 'Stats';
  const classes = [
    classComponent,
  ].join(' ');

  return (
    <div className={classes}>
      <h4>Estadísticas</h4>
      <ul>
        {statsFormat}
        <li className={`${classComponent}__total`}>
          <h5>Total</h5>
          <strong>{totalStats}</strong>
        </li>
      </ul>
    </div>
  );
}
