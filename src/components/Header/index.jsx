import './index.css'
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from '../../AppContext';
import { useContext } from "react";
import ButtonBack from '../../atoms/ButtonBack'

export default function Header() {
  const location = useLocation();
  const isFavoritePage = location.pathname.startsWith("/favorito");
  const isHomePage = location.pathname.startsWith("/pokemon");

  const classComponent = 'Header'
  const classes = [
    classComponent,
  ].join(' ')

  return (
    <header className={classes}>
      <nav className={'container'}>
        <ul>
          <ButtonBack />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive || isHomePage ? "active-link" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive || isFavoritePage ? "active-link" : ""
              }
            >
              Favoritos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

