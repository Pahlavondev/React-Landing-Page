import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="categories">
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          <MenuIcon className="menuIcon" />
          All categories
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Menu 1</DropdownItem>
          <DropdownItem>Menu 2</DropdownItem>
          <DropdownItem>Menu 3</DropdownItem>
          <DropdownItem>Menu 4</DropdownItem>
          <DropdownItem>Menu 5</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      <ul className="links">
        <li className="link-item">
          <Link
            to="/"
            className="link active"
            onClick={() => window.open("https://www.youtube.com/", "_blank")}
          >
            Home
          </Link>
        </li>
        <li className="link-item">
          <Link
            to="/"
            className="link"
            onClick={() =>
              window.open("https://github.com/Pahlavondev", "_blank")
            }
          >
            New arrivals
          </Link>
        </li>
        <li className="link-item">
          <Link
            to="/"
            className="link"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/pahlavon-qayumov-7387a1213/",
                "_blank"
              )
            }
          >
            Trending
          </Link>
        </li>
        <li className="link-item">
          <Link
            to="/"
            className="link"
            onClick={() => window.open("https://www.google.com/maps", "_blank")}
          >
            Deals for you
          </Link>
        </li>
        <li className="link-item">
          <Link
            to="/"
            className="link"
            onClick={() =>
              window.open("https://translate.google.com/", "_blank")
            }
          >
            Discounts
          </Link>
        </li>
        <li className="link-item">
          <Link
            to="/"
            className="link"
            onClick={() => window.open("https://m.facebook.com/", "_blank")}
          >
            Weekly offers
          </Link>
        </li>
        <li className="link-item">
          <Link
            to="/"
            className="link"
            onClick={() => window.open("https://twitter.com/", "_blank")}
          >
            Become a ventor
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
