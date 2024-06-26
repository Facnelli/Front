import { createGlobalStyle } from "styled-components";
import { colors } from "./StylesVariables";

export const GlobalStyles = createGlobalStyle`
*{
  
   
 body {
    
    margin: 0;
    font-family: Cabin, sans-serif,  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
      
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};
  }
  
  code {
    font-family: source-code-pro, sans-serif ,Menlo, Monaco, Consolas, 'Courier New', 
      monospace;
  }
}
`;
