import styled from "styled-components";
import { colors } from "../../Style/StylesVariables";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${colors.background.secondary};
  padding: 5px;
`;

export const HeaderButton = styled.button`
  border: 1px solid ${colors.font.primary};
  color: ${colors.font.primary};
  background-color: ${colors.background.headerbutton};
  height: 40px;
  width: 150px;
  margin-left: 25px;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 30px;
    width: 100px;
  }
`;
