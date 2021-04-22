import React, {UseState, UseEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarComponents'

const Navbar = ({toogle}) => {
    return (
        
        <Nav>
        <NavbarContainer>
       
        <MobileIcon onClick={toogle}>
        <FaBars/>
        </MobileIcon>
        <NavMenu>
        <NavItem>
        <NavLinks to='Home'
        smooth={true}
        duration={500}
        spy={true}
        exact='true'
     
        >Home</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks to='Services'
        smooth={true}
        duration={500}
        spy={true}
        exact='true'
        >Projects</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks to='About'
        smooth={true}
        duration={500}
        spy={true}
        exact='true'
        >About</NavLinks>
        </NavItem>
        </NavMenu>  
        <NavBtn>
        <NavBtnLink to="/" target="_blank">Sign Up</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
        </Nav>
        
    );
};

export default Navbar;
