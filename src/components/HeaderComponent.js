import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Navbar light>
                        <NavbarToggler onClick={this.toggleNav} />
                        <div className="col-md-4">
                            <div className="input-group mb-1">
                                <input type="text" class="form-control" placeholder="Search"  aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon={faSearch}/></button>
                            </div>
                        </div>
                        <NavbarBrand className="mr-auto" href="/">
                            <img id="logo" className='row' src="/final_logo.png" height="90" width="178" alt="logo" />
                        </NavbarBrand>
                        <Collapse navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">  
                                        <span className="fa fa-home fa-lg">Home</span>
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