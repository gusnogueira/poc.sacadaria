import React from "react";

import { Container, Conteudo, Username, UserContainer, Company, RigthContainer } from "./styles";

const Header: React.FC = () => (
  <Container>
    <Conteudo>
      <RigthContainer>
        <UserContainer>
          <Username>Guilherme Costa</Username>
          <Company>Wiyp Tecnologia</Company>
        </UserContainer>
      </RigthContainer>
    </Conteudo>
  </Container>
);

export default Header;
