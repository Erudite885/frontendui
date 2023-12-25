import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, NavLink, NavbarCollapse, NavbarBrand, NavbarToggle, Button, NavDropdown } from "react-bootstrap";

import './navbar.scss'
import { navLogo } from '../../assets';

const Navigation = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      const isTop = window.scrollY < 100
      setIsScrolling(!isTop)
    }

     window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  

  return (
    <Navbar bg='light' expand='lg' fixed='top' className={isScrolling ? 'scrolling-navbar' : ''} >
      <Container>
        <NavbarBrand href='#'>
          <img src={navLogo} alt="logo" />
        </NavbarBrand>
        <NavbarToggle aria-controls='basic-navbar-nav' />
        <NavbarCollapse>
          <Nav className='ml-auto'>
            <NavLink href='#home' >Home</NavLink>
            <NavLink href='#about'>About</NavLink>
            <NavLink href='#pricing'>Pricing</NavLink>
            {/* <NavLink href='#home'>pages</NavLink> */}
            <NavDropdown title='Pages' id='basic-nav-dropdown'>
              <NavDropdown.Item>Action</NavDropdown.Item>
            </NavDropdown>
            <NavLink href='#cart'>Cart(0)</NavLink>

            <Button variant='outline-primary' className='ml-2 download-app-button'>Download App</Button>
            <Button variant='success' className='ml-2 register-button'>Register</Button>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Navigation