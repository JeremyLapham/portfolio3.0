import React, { useState, useEffect } from 'react';
import styles from '../page.module.css'
import { Row, Col } from 'react-bootstrap';

export default function navbar() {
    const [isSticky, setIsSticky] = useState(false);
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
            const skillsOffset = skillsElement.offsetTop - 100;
            const projectsOffset = projectsElement.offsetTop - 100;
            const contactOffset = contactElement.offsetTop - 100;

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

            if (scrollY > 130) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`d-none d-xl-block ${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
            <div className='d-flex justify-content-start'>
                <Row>
                    <Col>
                        <a href='#introduction' className={`aTagToHTwo ${activeSection === 'introduction' ? 'active' : ''}`}>Intro</a>
                    </Col>
                    <Col>
                        <a href='#skills' className={`aTagToHTwo ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
                    </Col>
                    <Col>
                        <a href='#projects' className={`aTagToHTwo ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
                    </Col>
                    <Col>
                        <a href='#contact' className={`text-nowrap aTagToHTwo ${activeSection === 'contact' ? 'active' : ''}`}>Contact Me</a>
                    </Col>
                </Row>
            </div>
        </nav>
    );
}
