import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.primary.dark};
`;

export const MenuContainer = styled.div`
  margin-top: 12vh;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.primary.darkest};
  }
`;

export const MenuItemLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const Icone = styled.img`
  //top right bottom left
  align-self: center;
`;

export const LabelIcone = styled.span`
  display: flex;
  font-size: 9px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  justify-content: center;
`;
