import styled from 'styled-components';
import { colorWhite, mediaQueryMobile } from './variables';
import BannerImage from '../images/Banner.svg'

const HeaderWrapper = styled.header`
    width:100%;
    height: 90px;
    padding:20px;
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
    background-image: ${props => props.theme.solid ? `url(${BannerImage});` : 'none'}
`

const HeaderNav = styled.nav`
    
`
const ListNav = styled.ul`
    display:flex;
    list-style:none;
`

const ListNavItem = styled.li`
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-weight: 200;
    text-transform: uppercase;
    margin-right:50px;
    color: ${colorWhite};

    & > a{
        text-decoration: none;
        color: ${colorWhite};
    }
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