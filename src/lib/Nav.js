import React from "react";
import { Link } from "react-router-dom";

import "./styles/nav.css";

const Nav = (props) => {
  const linkItems = props.links
    ? props.links.map((l, idx) => {
        if (l.title && l.href) {
          return (
            <Link key={idx} to={l.href}>
              {l.title}
            </Link>
          );
        } else {
          return l;
        }
      })
    : null;

  return (
    <nav className="navbar">
      <div className="nav-title">
        <Link to="/">{props.title}</Link>
      </div>
      <div className="nav-links">{linkItems}</div>
    </nav>
  );
};

export default Nav;
