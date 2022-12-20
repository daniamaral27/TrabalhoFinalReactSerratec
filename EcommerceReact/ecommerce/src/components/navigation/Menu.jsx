import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "../../styles/Menu.css";
import { FiMenu, FiX } from "react-icons/fi";
import LogoLogin from "../../assets/LogoHomeB.png";

const Menu = ( props ) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span className="navbar__logo"><img src={LogoLogin} alt="" /></span>
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        <li className="navbar__item">
            <Link className="navbar__link" to="/">Home</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/produtos">Produtos</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/sobre">Sobre</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/contato">Contato</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/login"><i class="fa fa-user"></i></Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/cart"><i class="fa fa-shopping-cart"></i></Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/adm"><i class="fa fa-gear"></i></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;