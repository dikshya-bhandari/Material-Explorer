import React from "react";
import { Layout, Button } from "antd";
import "../styles/header.css";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className="header-wrapper">
      <Link to="/">
        <div className="logo">
          <img src={require("./../assets/mp_logo.png")} alt="Logo" />
        </div>
      </Link>
      <Link to="/" className="title">
        Material Explorer
      </Link>
      <div className="buttons">
        <Link to="/explore">
          <Button>Explore Materials</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </div>
    </Header>
  );
};

export default HeaderComponent;
