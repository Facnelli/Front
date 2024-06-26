import { SendButton } from "../../Components/Button/Style";
import {
  Container,
  ContainerEvents,
  ContainerManagement,
  Input,
  InputStyle,
  Subtitle,
  Title,
} from "./Style";

export function Events() {
  return (
    <Container>
      <ContainerEvents>
        <Title>adicionar novo evento</Title>
        <InputStyle>
          <Subtitle>Título</Subtitle>
          <Input placeholder='Festa'></Input>
        </InputStyle>

        <SendButton>Enviar</SendButton>
      </ContainerEvents>

      <ContainerManagement>
        <Title>Managementr Eventos</Title>
      </ContainerManagement>
    </Container>
  );
}
