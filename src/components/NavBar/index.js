import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = props => {
  let links = [];

  for (let key in props.links) {
    links.push(
      <Link to={props.links[key]} className="nav-link" key={key}>
        {key}
      </Link>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="navbar-brand">{props.brand}</div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">{links}</ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
