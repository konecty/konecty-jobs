import React from 'react'
import { HeaderWrapper, HeaderNav, ListNav, ListNavItem,HeaderIconMenu,HeaderImageLogo } from '../resources/styles/header';
import MediaQueryLaptop from './MediaQueryLaptop';
import MediaQueryMobile from './MediaQueryMobile';

const imageLogo = require('../resources/images/Logo.svg');
const menuIcon = require('../resources/images/menu.svg');

export default () => {
    return (
        <HeaderWrapper>
            <HeaderImageLogo src={imageLogo} />

            <MediaQueryLaptop>
                <HeaderNav>
                    <ListNav>
                        <ListNavItem>Product</ListNavItem>
                        <ListNavItem>Company</ListNavItem>
                        <ListNavItem>Pricing</ListNavItem>
                        <ListNavItem>Contact</ListNavItem>
                    </ListNav>
                </HeaderNav>
            </MediaQueryLaptop>

            <MediaQueryMobile>
                <HeaderIconMenu src={menuIcon}/>
            </MediaQueryMobile>

        </HeaderWrapper>
    )
}
