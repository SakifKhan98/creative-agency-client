import React from "react";
import HeaderContents from "../HeaderContents/HeaderContents";
import NavbarRB from "../NavbarRB/NavbarRB";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <NavbarRB></NavbarRB>
      <HeaderContents></HeaderContents>
    </div>
  );
};

export default Header;
