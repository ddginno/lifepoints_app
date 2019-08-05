import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        /*background-color:#6d7278;*/
       
       
}
    }

    html, body {
        margin: 0;
         padding-top:40px;
         padding-bottom:28px;
        
        
        
    }

    body {
        font-family: sans-serif;
        
   }
   input, textarea, button, select, a {
       -webkit-tap-highlight-color: rgba(0,0,0,0);
   }

`;
