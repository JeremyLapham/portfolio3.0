import React, { useState, useEffect } from 'react';
import styles from '../../page.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 130) {
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
        <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
            <div className='d-flex justify-content-start'>
                <Row>
                    <Col>
                        <a href='#skills' className='aTagToHTwo'>Skills</a>
                    </Col>
                    <Col>
                        <a href='#projects' className='aTagToHTwo'>Projects</a>
                    </Col>
                    <Col>
                        <a href='#contact' className='text-nowrap aTagToHTwo'>Contact Me</a>
                    </Col>
                </Row>
            </div>
        </nav>
    );
}
