import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li>
          <Link to="/workers">Trabajadores</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
