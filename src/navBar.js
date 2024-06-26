import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/timer" activeStyle>
                        Timer
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;