import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className='navbar bg-dark '>
      <div className='container-f'>
        <h1 style={{ backgroundColor: "rgb(214 145 30)", padding: "15px" }}>
          <i className={props.icon}></i>
          {"     " + props.title}
        </h1>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
NavBar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

export default NavBar;
