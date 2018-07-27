import { injectGlobal } from 'styled-components'
import { marginValue } from './variables';

injectGlobal`
    @import url(‘https://fonts.googleapis.com/css?family=Lato:100,400,900');

    body{
        margin:0;
        paggin:0;
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;
    }

    main{
        max-width:960px;
        margin : 0 auto;
        padding: ${marginValue}
    }
`