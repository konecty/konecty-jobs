import React, { Component } from 'react';
import Navbar from './../components/Navbar'
import { SemiBanner } from './../styles/styles';
import {
    App,
    Content,
    Email,
    Input,
    InputContainer,
    Main,
    Number,
    Text,
    TextArea,
    Title
} from './../styles/styles';

export default class Contact extends Component {
    render() {
        return (
            <App>
                <SemiBanner>
                    <Navbar />
                </SemiBanner>
                <Main>
                    <Content className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-md-5 col-md-offset-3-half">
                            <Title main>Get in Touch</Title>
                            <Text main>Contact us and learn how to optimize your sales and organize all the contacts and conversions your campaign generates.</Text>
                        </div>
                    </Content>
                    <Content className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-md-5 col-md-offset-3-half">
                            <Number>+55 51 3085 5151</Number>
                            <Email>contact@konect.com</Email>
                        </div>
                    </Content>
                    <Content className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-md-5 col-md-offset-3-half">
                            <Text main>Leave us a message. We will get back to you shortly.</Text>
                            <div className="row">
                                <InputContainer className="col-xs-12">
                                    <Input type="text" placeholder="Name"/>
                                </InputContainer>
                            </div>
                            <div className="row">
                                <InputContainer className="col-md-4 col-xs-12">
                                    <Input type="text" placeholder="Phone"/>
                                </InputContainer>
                                <InputContainer className="col-md-7 col-md-offset-1 col-xs-12">
                                    <Input type="email" placeholder="Email"/>
                                </InputContainer>
                            </div>
                            <div className="row">
                                <InputContainer className="col-xs-12">
                                    <TextArea placeholder="Message" rows="7"/>
                                </InputContainer>
                            </div>
                        </div>
                    </Content>
                </Main>
            </App>
        )
    }
}
