import styled, { injectGlobal } from 'styled-components'
import { marginValue, textColor } from './variables';
import 'flex-react/dist/style.css';

injectGlobal`
    body{
        margin:0;
        paggin:0;
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;
    }

    main{
        max-width:600px;
        margin : 0 auto;
        padding: ${marginValue}
    }

    main.small{
        max-width:550px;
    }

    p{
        color: ${textColor};
    }


    h1,h2,h3,h4,h5{
        color: ${textColor};
    }
`