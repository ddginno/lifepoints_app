import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        /*background-color:#6d7278;*/
       
       
}
    }

    html, body {
        margin: 0;
         
        
        
    }

    body {
        font-family: sans-serif;
        padding-top:80px;
         padding-bottom:58px;
        
   }
   input, textarea, button, select, a {
       -webkit-tap-highlight-color: rgba(0,0,0,0);
   }

`;
