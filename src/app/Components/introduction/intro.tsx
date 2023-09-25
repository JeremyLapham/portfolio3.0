import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../navbar/navbar';
import Image from 'next/image';
import me from '../../Images/meside.png';
import { introIcons } from '@/app/objects/icons';

export default function Intro() {
    return (
        <Container fluid style={{ minHeight: '100vh' }} className='pageMargin'>
            <Row style={{ paddingTop: '130px' }}>
                <Row>
                    <Col lg={8}>
                            <h1 style={{position: 'relative', letterSpacing: 25}}>
                                JEREMY
                            <Image className='meImage' src={me} alt='me as a big png' />
                            </h1>
                            <h1 className='ms-5' style={{letterSpacing: 25}}>LAPHAM</h1>
                    </Col>
                    <Col>
                        <Navbar />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className='d-flex align-items-center justify-content-start'>
                        {introIcons.map((icon: any) => {
                            return (
                                <a href={`${icon.link}`} target='_blank' className='ms-5 mt-5'>
                                    {icon.icon}
                                </a>
                            )
                        })}
                    </Col>
                    <Col className='mt-5'>
                        <h3 style={{ color: '#909090' }}>-INTRODUCTION</h3>
                        <h3>I'm a skilled frontend developer proficient in HTML, CSS, JavaScript, and TypeScript, with expertise in React and Angular. I also have backend experience in C# and SQL Database. Passionate about creating visually appealing and responsive web applications. I strive to deliver high-quality products that make a positive impact.</h3>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}
