import React from "react";
import HeaderContents from "../HeaderContents/HeaderContents";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <HeaderContents></HeaderContents>
    </div>
  );
};

export default Header;
