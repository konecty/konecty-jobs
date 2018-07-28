import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from 'reactstrap';

import './style.css';
export default class extends Component
{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { expanded: true };
    }

    toggle(){
        this.setState({ expanded: !this.state.expanded });
    }

    render(){
        return (
            <Navbar expand="md" className="pt-1 pt-md-2" style={{color: "white", ...this.props.style}}>
                <NavbarBrand href="/" className="mr-auto ml-4 brand">
                    <img src="logo-konecty.png" className="d-block" width="200" height="auto"/>
                    {/* <img src="konecty2.png" className="d-md-none d-sm-block" width="45" height="45"/> */}
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="navbar-dark"/>
                <Collapse isOpen={!this.state.expanded} navbar className="calipso" >
                    <Nav className="ml-auto no-decoration" navbar>
                        <NavLink href="#/product">Product</NavLink>
                        <NavLink href="#/company">Company</NavLink>
                        <NavLink href="#/pricing">Pricing</NavLink>
                        <NavLink href="#/contact">Contact</NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}