import styled from "styled-components";
import { colors } from "../../Style/StylesVariables";

export const SendButton = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 10px;
  margin-top: 30px;
  background-color: ${colors.background.button};
  text-transform: uppercase;
  color: ${colors.font.button};
  font-size: 20px;
`;
