import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/img/theMovie-logo.png"
import NavLinks from "./NavLinks";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import classes from "../css/Navbar.module.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navRef = useRef();
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLinkClick = () => {
    setShowDropdown(false);
  };
  const handleClickOutside = () => {
    setShowDropdown(false);
  };
  const OutsideClick = (callback, ref) => {
    const handleClickOutside = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        callback();
        return;
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };
  OutsideClick(handleClickOutside, navRef);

  return (
    <header
      className={`${classes.navbar} ${showDropdown && classes.dropstatus}`}
      ref={navRef}
    >
      {!showDropdown && <Link to="/" className={classes.logo}>
        <img src={logo} alt="movie-central" />
      </Link>}
      <nav className={classes.menu}>
        <NavLinks handleLinkClick={handleLinkClick} />
      </nav>

      {!showDropdown && (
        <MenuOutlined
          onClick={handleClick}
          className={`${classes.baricon}  ${showDropdown && classes.menubar}`}
        />
      )}

      {showDropdown && (
        <nav className={classes.dropMenu}>
          <CloseCircleOutlined
            onClick={handleClick}
            className={classes.closeIcon}
          />
          <NavLinks handleLinkClick={handleLinkClick} />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
