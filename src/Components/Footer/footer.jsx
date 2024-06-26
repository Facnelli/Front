import { Contacts, FooterStyle } from "./Style";
import logoFooter from "../../Assets/logoFooter.svg";

export function Footer() {
  return (
    <FooterStyle>
      <img style={{ width: "150px", height: "auto" }} src={logoFooter} alt='logo' />
      <Contacts>casatuetimbua@gmail.com (37) 9 9634 9759 </Contacts>
    </FooterStyle>
  );
}
