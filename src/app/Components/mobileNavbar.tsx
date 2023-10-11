import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function MobileNavbar() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
        const introductionElement = document.getElementById('introduction');
        const skillsElement = document.getElementById('skills');
        const projectsElement = document.getElementById('projects');
        const contactElement = document.getElementById('contact');

        if (!introductionElement || !skillsElement || !projectsElement || !contactElement) {
            return;
        }

        const introductionOffset = introductionElement.offsetTop;
        const skillsOffset = skillsElement.offsetTop;
        const projectsOffset = projectsElement.offsetTop;
        const contactOffset = contactElement.offsetTop;

        const scrollY = window.scrollY;

        if (scrollY < skillsOffset) {
            setActiveSection('introduction');
        } else if (scrollY >= skillsOffset && scrollY < projectsOffset) {
            setActiveSection('skills');
        } else if (scrollY >= projectsOffset && scrollY < contactOffset) {
            setActiveSection('projects');
        } else {
            setActiveSection('contact');
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <Navbar fixed='top' collapseOnSelect expand="xl" className="mobileNavbar d-block d-xs-block d-sm-block d-md-block d-lg-block d-xl-none" >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='newToggle' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={`mobileNavText ${activeSection === 'introduction' ? 'active' : ''}`} href="#introduction">Intro</Nav.Link>
            <Nav.Link className={`mobileNavText ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">Skills</Nav.Link>
            <Nav.Link className={`mobileNavText ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">Projects</Nav.Link>
            <Nav.Link className={`mobileNavText ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
