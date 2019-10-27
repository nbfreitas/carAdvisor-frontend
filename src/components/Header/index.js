import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import Notifications from "../Notifications";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="CarAdvisor" />
            <Link to="/dashboard">Agendamentos</Link>
            <Link to="/new">Adicionar</Link>
          </Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Nicolas Freitas</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Nicolas Freitas"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
