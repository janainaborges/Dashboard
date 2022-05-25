import { User } from "react-feather";
import { Link } from "react-router-dom";

import { Container, Content, Image, Nav, Profile } from "./styles";

export function Navbar() {
  return (
    <Container>
      <Content>
        <Profile>
          <Image>
            <User size={55} color="#20deb2" />
          </Image>
          <div>
            <h2>MY NAME USER</h2>
            <p>user@teste.com</p>
          </div>
        </Profile>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </ul>
        </Nav>
      </Content>
    </Container>
  );
}
