import React, { Component } from 'react'
import Header from '../components/Header';
import { Input, Textarea } from '../resources/styles/inputs';
import { PhoneNumber, ContactAddress, InfoContactContainer } from '../resources/styles/contact';
import {Row,Col} from '../resources/styles/grid';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header solid="true" />
                <main className="small">
                    <h1>Get in Touch</h1>
                    <p>Contact us and learn how to optimize your sales and organize all the contacts and conversions your campaign generates.</p>

                    <InfoContactContainer>
                        <PhoneNumber>+55 51 3085 5151</PhoneNumber>
                        <ContactAddress>contact@konect.com</ContactAddress>
                    </InfoContactContainer>

                    <p>Leave us a message. We will get back to you shortly.</p>

                    <Row>
                        <Col>
                            <Input placeholder="Nome" />
                        </Col>
                    </Row>
                    <Row>
                        <Col flex={2}>
                            <Input placeholder="Phone" />
                        </Col>
                        <Col flex={2}>
                            <Input placeholder="Email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Textarea placeholder="Message" rows="8"></Textarea>
                        </Col>
                    </Row>
                </main>
            </div>
        )
    }
}
