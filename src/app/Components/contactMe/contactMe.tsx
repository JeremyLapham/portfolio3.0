import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import ToastComponent from '../toast/toastComponent';
import swal from 'sweetalert';

export default function contactMe() {

    const [from_name, setFrom_Name] = useState('');
    const [message, setMessage] = useState('');

    const emailToSendToMe = {
        from_name: from_name,
        to_name: "Jeremy",
        message: message,
        user_email: "jeremyslapham@gmail.com",
    }
    const sendEmail = () => {
        if (message === '' || from_name === '') {
            swal('Please make sure to fill in both forms')
        } else {
            emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, emailToSendToMe, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
                .then(function (response: any) {
                    swal('SUCCESS your message was sent')
                }, function (error: any) {
                    swal('FAILURE there was an issue with your message please try again')
                });
        }
    }

    return (
        <Container fluid className='pageMargin' id='contact'>
            <Row>
                <Col>
                    <h1 className='mt-5'>
                        Contact Me
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{ margin: '0px 200px' }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Email Address</Form.Label>
                                <Form.Control className='contactBox' type="email" placeholder="name@example.com" value={from_name} onChange={(e: any) => setFrom_Name(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message To Me</Form.Label>
                                <Form.Control as="textarea" rows={15} placeholder='Message goes here' value={message} onChange={(e: any) => setMessage(e.target.value)} />
                            </Form.Group>
                        </Form>
                        <Button onClick={sendEmail}>
                            Send Email
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
