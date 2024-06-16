import { HeaderStyle } from "./style";
import logoHeader from "./logoHeader.svg";

export function Header() {
  return (
    <HeaderStyle>
      <img className='logoHeader' src={logoHeader} alt='logo' />
    </HeaderStyle>
  );
}
