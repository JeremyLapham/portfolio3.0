import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import ToastComponent from '../toast/toastComponent';
import swal from 'sweetalert';

export default function contactMe() {
    const [good, setGood] = useState(false);
    const [bad, setBad] = useState(false);

    const toggleShowA = () => setGood(!good);

    const [from_name, setFrom_Name] = useState('');
    const [message, setMessage] = useState('');

    const emailToSendToMe = {
        from_name: from_name,
        to_name: "Jeremy",
        message: message,
        user_email: "jeremyslapham@gmail.com",
    }
    const sendEmail = () => {
        if (message === '' && from_name === '') {

        } else {
            emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, emailToSendToMe, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
                .then(function (response: any) {
                    console.log('SUCCESS!', response.status, response.text);
                    setGood(true);
                }, function (error: any) {
                    console.log('FAILED...', error);
                    setBad(true);
                });
            setTimeout(() => {
                setGood(false)
                setBad(false)
            }, 500);
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
                                <Form.Label>Your Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" value={from_name} onChange={(e: any) => setFrom_Name(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message To Me</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder='Message goes here' value={message} onChange={(e: any) => setMessage(e.target.value)} />
                            </Form.Group>
                        </Form>
                        <Button onClick={toggleShowA}>
                            Send Email
                        </Button>
                        {bad && <ToastComponent status={'FAILURE'} />}
                        {good && <ToastComponent status={'SUCCESS'} />}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
