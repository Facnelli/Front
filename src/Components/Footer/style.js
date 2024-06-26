import styled from "styled-components";
import { colors } from "../../Style/StylesVariables";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.background.secondary};
  max-height: 245px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Contacts = styled.h3`
  width: 400px;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: end;
  font-size: 2rem;
  font-family: "Cabin";
  text-transform: lowercase;
  font-weight: 100;
  font-style: normal;
  text-align: right;
  margin-right: 50px;

  @media (max-width: 700px) {
    width: 200px;
    font-size: 1rem;
    margin-right: 20px;
  }
`;
/* casatuetimbua@gmail.com (37) 9 9634 9759 */
