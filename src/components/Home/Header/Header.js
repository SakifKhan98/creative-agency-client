import React from "react";
import HeaderContents from "../HeaderContents/HeaderContents";
import Navbar from "../Navbar/Navbar";
import NavbarRB from "../Navbar/NavbarRB";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* <Navbar></Navbar> */}
      <NavbarRB></NavbarRB>

      <HeaderContents></HeaderContents>
    </div>
  );
};

export default Header;
