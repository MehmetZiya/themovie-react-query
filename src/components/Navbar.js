import { NavLink } from "react-router-dom";
import classes from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>The Movies App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/genres" activeClassName={classes.active}>
              Genres
            </NavLink>
          </li>
          <li>
            <NavLink to="/popular" activeClassName={classes.active}>
              Popular Films
            </NavLink>
          </li>
          <li>
            <NavLink to="/now_playing" activeClassName={classes.active}>
              Now Playing
            </NavLink>
          </li>
          <li>
            <NavLink to="/top_rated" activeClassName={classes.active}>
              Top Rated
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
