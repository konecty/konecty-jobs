import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Menu, MenuIcon, MenuItens, NavbarResponsive, Icon } from './../styles/styles'

const menu = require('./../images/menu.svg');
export default class NavbarMobile extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <NavbarResponsive>
            <MenuIcon src={menu} alt="menu" onClick={() => this.toggle() }/>

            {
                this.state.isOpen &&
                <Menu>
                    <MenuItens>
                        <Link to="/">PRODUCT</Link>
                        <Link to="/">COMPANY</Link>
                        <Link to="/">PRICING</Link>
                        <Link to="contact">CONTACT</Link>
                    </MenuItens>
                    <Icon onClick={() => this.toggle() } className="material-icons">clear</Icon>
                </Menu>
            }
        </NavbarResponsive>
        )
    }
}


