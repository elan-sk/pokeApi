import { AppContext } from '../../../AppContext';
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
    <li key={index} className="row">
      <h4 className="col-1">{shortStats[stat.stat.name]}</h4>
      <div className="col-10">
        <span style={{ width: `${stat.base_stat / highestStats[stat.stat.name] * 100}%` }}></span>
      </div>
      <span className="col-1">{stat.base_stat}</span>
    </li>
  ));
  const totalStats = stats.reduce((total, stat) => total + stat.base_stat, 0);

  const classComponent = 'Stats';
  const classes = [
    classComponent,
    ''
  ].join(' ');

  return (
    <div className={classes}>
      <h3>Estadísticas</h3>
      <ul>
        {statsFormat}
        <li className="col-1"><strong>{totalStats}</strong></li>
      </ul>
    </div>
  );
}
