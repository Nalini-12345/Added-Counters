import React from "react";

const NavBar = (props) => {
    console.log(props);
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="bage badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};



export default NavBar;