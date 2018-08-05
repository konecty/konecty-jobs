import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import Card from './../components/Card';
import {
    App,
    Banner,
    Button,
    CardText,
    CardTitle,
    Content,
    Icon,
    Main,
    Text,
    Title,
    ButtonWrapper
} from './../styles/styles';

const map = require('./../images/map-icon.svg');
const chart = require('./../images/chart-icon.svg');
const tv = require('./../images/tv-icon.svg');

export default class Home extends Component {
    render() {
        return (
            <App>
                <Banner>
                    <Navbar />
                    <Content className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-2">
                            <Title>Manage, get in touch and get more clients.</Title>
                            <Text>Konecty is a CRM Tool focused on offering users facility, flexibility and speed, allowing customization and development of new applications.</Text>
                        </div>
                    </Content>
                    <div className="row between-xs">
                        <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-2">
                            <ButtonWrapper>
                                <Button primary>Watch Demo <Icon className="material-icons">play_arrow</Icon></Button>
                                <Button>Contact Us</Button>
                            </ButtonWrapper>
                        </div>
                    </div>
                </Banner>
                <Main>
                    <Content className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
                            <Title main>Complete tool, from A to Z</Title>
                            <Text main>Plan, execute and follow-up your marketing campaigns, generating demand for your products and services.</Text>
                        </div>
                        
                        <div className="col-md-8 col-md-offset-2">
                            <div className="row center-xs">
                                <div className="col-md-4 col-xs-12">
                                    <Card img={map}>
                                        <CardTitle>Map of processes</CardTitle>
                                        <CardText>Manage activities and processes organizing your project and finding the best way to optimize time and resources.</CardText>
                                    </Card>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <Card img={chart}>
                                        <CardTitle>Forecast & Reports</CardTitle>
                                        <CardText>Run your business with predictability based on the forecast coming from your sales pipeline and on the reports coming from your past sales experience.</CardText>
                                    </Card>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <Card img={tv}>
                                        <CardTitle>Real-time View</CardTitle>
                                        <CardText>Don’t wait for tomorrow to make decisions! Get all this information in real-time, having the power to act fast and accurately at any time.</CardText>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Main>
            </App>
        )
    }
}
