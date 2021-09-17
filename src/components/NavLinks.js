import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "../css/Navbar.module.css";
const NavLinks = ({handleLinkClick}) => {
  return (
    <Fragment>
      
      <NavLink onClick={handleLinkClick} to="/home" className ={classes.navItem}activeClassName={classes.active} >
        Home
      </NavLink>

      <NavLink onClick={handleLinkClick} to="/popular" activeClassName={classes.active} className ={classes.navItem}>
        Popular Films
      </NavLink>

      <NavLink onClick={handleLinkClick} to="/now_playing" activeClassName={classes.active} className ={classes.navItem}>
        Now Playing
      </NavLink>

      <NavLink onClick={handleLinkClick} to="/top_rated" activeClassName={classes.active} className ={classes.navItem}>
        Top Rated
      </NavLink>

      <NavLink onClick={handleLinkClick} to="/genres" activeClassName={classes.active} className ={classes.navItem}>
        Genres
      </NavLink>

    </Fragment>
  );
};

export default NavLinks;
