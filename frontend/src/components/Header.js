import React from 'react'
import { HeaderWrapper, HeaderNav, ListNav, ListNavItem } from '../resources/styles/header';
import imageLogo from '../resources/images/Logo.svg';

export default () => {
    return (
        <HeaderWrapper>
            <img src={imageLogo} />
            <HeaderNav>
                <ListNav>
                    <ListNavItem>Product</ListNavItem>
                    <ListNavItem>Company</ListNavItem>
                    <ListNavItem>Pricing</ListNavItem>
                    <ListNavItem>Contact</ListNavItem>
                </ListNav>
            </HeaderNav>
        </HeaderWrapper>
    )
}
