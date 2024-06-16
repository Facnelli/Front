import { FooterStyle } from "./style";
import logo from "./Logo.svg";

export function Footer() {
  return (
    <FooterStyle>
      <img className='logo' src={logo} alt='logo' />
    </FooterStyle>
  );
}
