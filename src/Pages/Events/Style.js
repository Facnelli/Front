import styled from "styled-components";
import { colors } from "../../Style/StylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.font.title};
  text-transform: uppercase;
  font-size: 2rem;
`;

export const ContainerEvents = styled.div`
  width: 1021px;
  //background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

export const Subtitle = styled.h4`
  margin: 0px;
`;

export const Input = styled.input`
  display: flex;
  width: 700px;
  height: 50px;
  background-color: ${colors.background.input};
  border: 2px solid ${colors.font.primary};
  border-radius: 10px;
  padding: 5px;
  font-size: 1rem;

  ::placeholder {
    color: ${colors.font.primary};
  }

  @media (max-width: 1000px) {
    width: 500px;
    height: 40px;
  }
`;

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ContainerManagement = styled.div``;
