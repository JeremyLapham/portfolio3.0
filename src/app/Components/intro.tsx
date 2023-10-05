import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Navbar from './navbar';
import Image from 'next/image';
import me from '@/app/Images/meside.png';
import { introIcons } from '@/app/objects/icons';
import resume from '../Images/Jeremy\'s_Resume-1.png';

export default function Intro() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container fluid style={{ minHeight: '100vh' }} className='pageMargin' id='introduction'>
            <Modal contentClassName="custom-modal-content" show={show} onHide={handleClose}>
                <Modal.Body className='imgModal'>
                    <Image src={resume} alt='My Resume' className='resume'/>
                </Modal.Body>
            </Modal>
            <Row style={{ paddingTop: '130px' }}>
                <Row>
                    <Col lg={6}>
                        <h1 style={{ position: 'relative', letterSpacing: 25 }} className='nameWave'>
                            JEREMY
                            <Image className='meImage' src={me} alt='me as a big png' />
                        </h1>
                        <h1 className='ms-5' style={{ letterSpacing: 25 }}>LAPHAM</h1>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <Navbar />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className='d-flex align-items-center justify-content-start'>
                        {introIcons.map((icon, idx) => (
                            icon.show ? (
                                <Button
                                    variant=''
                                    onClick={handleShow}
                                    key={idx}
                                    className='ms-5 mt-5 iconShadow'
                                >
                                    {icon.icon}
                                </Button>
                            ) : (
                                <Button
                                    variant=''
                                    key={idx}
                                    href={`${icon?.link}`}
                                    target={`${icon?.target}`}
                                    className='ms-5 mt-5 iconShadow'
                                >
                                    {icon.icon}
                                </Button>
                            )
                        ))}
                    </Col>
                    <Col className='mt-5'>
                        <h2 style={{ color: '#909090' }}>-INTRODUCTION</h2>
                        <h3>I am a skilled Fullstack developer proficient in HTML, CSS, and JavaScript, with experience with React and Angular. Also have backend experience in C# and SQL Database. Passionate about creating visually appealing and responsive web applications. I strive to deliver high-quality products that make a positive impact.</h3>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}
