import React, { useState } from 'react';
import { Row, Col, Toast, Button } from 'react-bootstrap';

export default function ToastComponent(props: any) {
    return (
        <Row className=''>
            <Col md={6} className="mb-2 ">
                <Toast className='emailToast'>
                    <Toast.Header>
                        <strong className="me-auto">{props.status}</strong>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
}
