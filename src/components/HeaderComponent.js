import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Navbar light>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img className='row' src="/bell.png" height="60" width="60" alt="logo" />
                        </NavbarBrand>
                        <Collapse navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">  
                                        <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </>
        );
    }
}

export default Header;