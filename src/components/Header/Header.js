import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <div className="header">
      <p>{props.name}</p>
    </div>
  );
};

export default Header;
