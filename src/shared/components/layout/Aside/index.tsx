import React from "react";

import { Container, MenuContainer, LabelIcone, MenuItemLink, ItemContainer } from "./styles";

const Aside: React.FC = () => (
  <Container>
    <MenuContainer>
      <MenuItemLink to="/condominios">
        <ItemContainer>
          <LabelIcone>condominios</LabelIcone>
        </ItemContainer>
      </MenuItemLink>

      <MenuItemLink to="/clientes">
        <ItemContainer>
          <LabelIcone>clientes</LabelIcone>
        </ItemContainer>
      </MenuItemLink>

      <MenuItemLink to="/ordensServico">
        <ItemContainer>
          <LabelIcone>ordensServico</LabelIcone>
        </ItemContainer>
      </MenuItemLink>

      <MenuItemLink to="/projetos">
        <ItemContainer>
          <LabelIcone>projetos</LabelIcone>
        </ItemContainer>
      </MenuItemLink>
    </MenuContainer>
  </Container>
);

export default Aside;
