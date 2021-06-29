import { Link } from "react-router-dom";
import cssclasses from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteContextObject = useContext(FavoritesContext);
  return (
    <header className={cssclasses.header}>
      <div className={cssclasses.logo}>React Meetups Home</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet Ups</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={cssclasses.badge}>
                &nbsp;{favoriteContextObject.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/newmeetups">New Meet Ups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
// to="/" is used cos we r linking it to the index page. Remember Switch.
