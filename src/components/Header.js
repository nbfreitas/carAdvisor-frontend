/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from "../assets/logo.svg";
import add from "../assets/add.svg";
import auth from "../assets/login.svg";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="CarAdvisor" />
        </Link>
        <Link to="/new">
          <img src={add} alt="Adicionar carros" id="new" />
        </Link>
        <p>Adicionar</p>
        <Link to="/login">
          <img src={auth} alt="Login" id="login" />
        </Link>
        <p>Entrar</p>
      </div>
    </header>
  );
}
