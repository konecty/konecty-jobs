import React, { Component } from 'react'
import { HeaderWrapper, HeaderNav, ListNav, ListNavItem, HeaderIconMenu, HeaderImageLogo } from '../resources/styles/header';
import MediaQueryLaptop from './MediaQueryLaptop';
import MediaQueryMobile from './MediaQueryMobile';
import { Menu, MenuItem, MenuAction } from '../resources/styles/menu';
import { Link } from 'react-router-dom';

const imageLogo = require('../resources/images/Logo.svg');
const menuIcon = require('../resources/images/menu.svg');
const closeIcon = require('../resources/images/close.svg');

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        let solid = this.props.solid;
        return (
            <HeaderWrapper theme={{ solid: solid }}>
                <HeaderImageLogo src={imageLogo} />

                <MediaQueryLaptop>
                    <HeaderNav>
                        <ListNav>
                            <ListNavItem><Link to="/">Product</Link></ListNavItem>
                            <ListNavItem>Company</ListNavItem>
                            <ListNavItem>Pricing</ListNavItem>
                            <ListNavItem><Link to="/contact">Contact</Link></ListNavItem>
                        </ListNav>
                    </HeaderNav>
                </MediaQueryLaptop>

                <MediaQueryMobile>
                    <HeaderIconMenu src={menuIcon} onClick={() => this.toggleMenu()} />

                    {
                        this.state.open &&
                        <Menu>
                            <MenuAction>
                                <img src={closeIcon} onClick={() => this.toggleMenu()} />
                            </MenuAction>
                            <MenuItem><Link to="/">Product</Link></MenuItem>
                            <MenuItem>Company</MenuItem>
                            <MenuItem>Pricing</MenuItem>
                            <MenuItem><Link to="/contact">Contact</Link></MenuItem>
                        </Menu>
                    }
                </MediaQueryMobile>

            </HeaderWrapper>
        )
    }
}
