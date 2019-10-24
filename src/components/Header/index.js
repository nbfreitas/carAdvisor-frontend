import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";

import logo from "../../assets/logo.svg";
// import add from "../../assets/add.svg";
import auth from "../../assets/login.svg";

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="CarAdvisor" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              {/* <strong>{profile.name}</strong> */}
              <Link to="/new">ADICIONAR AUTOMÓVEIS</Link>
              {/* <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="Nicolas Freitas"
              /> */}

              <Link to="/profile">
                <img src={auth} alt="Login" id="Login" />
                MEU PERFIL
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
