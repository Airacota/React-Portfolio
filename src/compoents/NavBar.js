import { useState, useEffect } from 'react';

import {Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.png'
import linkdin from '../assets/img/linkdin.png'
import facebook from '../assets/img/facebook.png'
import github from '../assets/img/github.png'



export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  
    

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home"> 
            <img className='logo' src={logo} alt="name" /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span classname="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar=link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar=link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>  
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar=link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> 
                <Nav.Link href="#experience" className={activeLink === 'experince' ? 'active navbar=link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experince')}>Experience</Nav.Link> 
              </Nav>
              <span classname="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/"><img src={linkdin} alt="" /></a>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                    <a href="https://github.com/"><img src={github} alt="" /></a>
                </div>

              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }



