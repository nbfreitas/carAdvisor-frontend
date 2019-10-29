import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
// import schedule from "../../assets/calendar.svg";

import Notifications from "../Notifications";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/cars">
            <img id="logo" src={logo} alt="CarAdvisor" />
          </Link>

          {/* <img id="schedule" src={schedule} alt="schedule" /> */}
          {profile.provider ? (
            <Link to="/dashboard">Agendamentos</Link>
          ) : (
            <Link to="/dashboardClient">Agendamentos</Link>
          )}

          {profile.provider ? <Link to="/new">Adicionar</Link> : ""}
        </nav>

        <aside>
          {profile.provider ? <Notifications /> : ""}

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
