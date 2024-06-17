import { HeaderStyle } from "./style";

import image from "./image.png";

export function Header() {
  return (
    <HeaderStyle>
      <img style={{ width: " 60px", height: "auto" }} src={image} alt='logo' />
    </HeaderStyle>
  );
}
