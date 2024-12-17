import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from '../../AppContext';
import { useContext } from "react";
import ButtonBack from '../../atoms/ButtonBack'

export default function Header() {
  const { handleGoBack } = useContext(AppContext);
  const location = useLocation();
  const isFavoritePage = location.pathname.startsWith("/favorito");
  const isHomePage = location.pathname.startsWith("/pokemon");

  const classComponent = 'navigation'
  const classes = [
    classComponent,
    'container'
  ].join(' ')

  return (
    <header>
      <nav className={classes}>
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
