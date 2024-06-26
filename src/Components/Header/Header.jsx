import { HeaderButton, HeaderStyle } from "./Style";

import logoHeader from "../../Assets/logoHeader.png";

export function Header() {
  return (
    <HeaderStyle>
      <img style={{ width: " 60px", height: "auto" }} src={logoHeader} alt='logo' />
      <div>
        <HeaderButton>Home</HeaderButton>
        <HeaderButton>Eventos</HeaderButton>
      </div>
    </HeaderStyle>
  );
}
