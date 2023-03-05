import React from "react";
import { Link } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="text-white font-weight-bold">
        Home
      </Link>
      <Link to="/rockets" className="text-white font-weight-bold">
        Rockets
      </Link>
      <Link to="/launches" className="text-white font-weight-bold">
        Launches
      </Link>
    </nav>
  );
};

export default AppNav;
