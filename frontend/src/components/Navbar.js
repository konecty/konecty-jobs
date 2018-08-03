import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, Navbar, Header } from './../styles/styles'
import NavbarMobile from './NavbarMobile';

const logo = require('./../images/logo.svg');

export default () => {
    return (
        <Header>
            
            <Link to="/">
                <Logo src={logo} alt="logo"/>
            </Link>

            <Navbar>
                <Link to="/">PRODUCT</Link>
                <Link to="/">COMPANY</Link>
                <Link to="/">PRICING</Link>
                <Link to="contact">CONTACT</Link>
            </Navbar>

            <NavbarMobile/>
        </Header>
    )
}
