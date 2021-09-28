import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem ,Nav, NavLink} from 'reactstrap';

class MainNavBar extends Component{
    state={};
    render(){
        return(
            <div>           
                <Navbar color="light" light expand="lg" style={{position:"fixed", width:"100%", paddingLeft:25}}>
                    <NavbarBrand href="/">Games Company</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem><NavLink href="#">Em desenvolvimento</NavLink></NavItem>
                    </Nav>
                </Navbar>
            </div>
            
        );
    }
}
export default MainNavBar;