import styled from 'styled-components';
import { colorWhite, mediaQueryMobile } from './variables';

const HeaderWrapper = styled.header`
    width:100%;
    height: 90px;
    padding:20px;
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
`

const HeaderNav = styled.nav`
    
`
const ListNav = styled.ul`
    display:flex;
    list-style:none;
`

const ListNavItem = styled.li`
    color: ${colorWhite};
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    margin-right:90px;
`

const HeaderIconMenu = styled.img`
    width:30px;
`
const HeaderImageLogo = styled.img`
    ${mediaQueryMobile(`
        width:160px;
    `)}
`

export {
    HeaderWrapper,
    HeaderNav,
    ListNav,
    ListNavItem,
    HeaderIconMenu,
    HeaderImageLogo
}