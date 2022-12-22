import React from "react";
import navLogo from "../assets/logo.png";
import Like from "../assets/navIcons/like.png";
import User from "../assets/navIcons/user.png";
import Shopping from "../assets/navIcons/shopping.png";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <a className="nav-logo" href="#">
          <img className="nav-image" src={navLogo} alt="Navbar Logo" />
        </a>

        <div className="searchSection">
          <form>
            <input
              type="text"
              className="searchInput"
              placeholder="Search For Products, Brands & Categories"
            />
            <button className="searchBtn" type="button">
              <SearchIcon />
            </button>
          </form>
        </div>

        <div className="icons">
          <a href="#" className="iconsSection">
            <img src={Like} alt="like icon" />
          </a>

          <a href="#" className="iconsSection">
            <img src={User} alt="user icon" />
          </a>

          <a href="#" className="iconsSection">
            <img src={Shopping} alt="shopping icon" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
