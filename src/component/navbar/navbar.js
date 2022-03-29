import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

export const Navbar = () => {
  const [hambur, setHam] = useState(true);
  const [page, setPage] = useState(true);
  const menu = () => {
    setHam(!hambur);
    setPage(!page);
  };

  return (
    <>
      <div className="overlay-content">
        <div className="name-logo">
          <a href="https://github.com/HamidAliZain"  target="_blank" className="ican-a">
            <h3>Hamid Ali</h3>
          </a>
        </div>
        <div className="nav-icon">
          <a className="ican-a" href="https://twitter.com/HamidAliZain" target="_blank">
            <i className="fa-brands fa-twitter nav-logo"></i>
          </a>
          <a
            className="ican-a"
            href="https://www.linkedin.com/in/hamid-ali-973382219/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in nav-logo2"></i>
          </a>
        </div>
      </div>
    </>
  );
};
