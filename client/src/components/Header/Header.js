import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="header">
    <div className="nav-left">
      <Link to="/">New York Times Article Search</Link>
    </div>
    <div className="nav-right">
      <Link to="/">Search</Link>
      <Link to="/saved">Saved Articles</Link>
    </div>
  </div>
);

export default Header;