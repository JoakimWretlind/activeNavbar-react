import React from 'react'
import { Nav, NavUl, NavLi } from './navbar.style'
import { navbarData } from './navbarData';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <Nav>
            <NavUl>
                {navbarData.map((item, index) => {
                    return (
                        <NavLi key={index}>
                            <Link activeClass="active" offset={item.offset} to={item.path} isDynamic={true} spy smooth="easeInOutQuart" duration={1000}>{item.title}</Link>
                        </NavLi>
                    )
                })}
            </NavUl>
        </Nav>
    )
}

export default Navbar
