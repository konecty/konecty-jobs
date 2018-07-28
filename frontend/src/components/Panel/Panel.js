import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';

import './Style.css';
export default class Panel extends Component {
    constructor(props){
        super(props);
        this.clicou = this.clicou.bind(this);
    }

    clicou(){
        window.history.pushState({}, "contato", "/#/contact");
        window.location.reload();
    }

    render(){
        return (
            <Container fluid className="meuContainer" >
                <Row className="content text-center text-md-left p-md-5" >
                    <div className="col-md-1"></div>
                    <div className="col col-md-6 align-sm-start">
                        <strong>
                            Manage, get in touch
                            and get more clients
                        </strong>
                    </div>

                    {/*====================================*/}
                    <div className="w-100 my-3"></div>
                    {/*====================================*/}

                    <div className="col-md-1"></div>
                    <div className="col col-md-6">
                        <small className="d-block align-sm-start">
                            Konecty is a CRM Tool focused on offering users facility, flexibility and
                            speed, allowing customization and development of new applications.
                        </small>
                    </div>

                    {/*====================================*/}
                    <div className="w-100 my-3"></div>
                    {/*====================================*/}

                    <div className="col-md-1"></div>
                    <Button color="primary" className="col col-md-2 mx-5 mx-md-3">
                        Watch Demo
                    </Button>

                    <div className="col-sm-1 d-md-none"></div>
                    <Button outline className="col col-md-2 mx-5 mx-md-3 my-3 my-sm-0" onClick={this.clicou}>
                        Contact Us
                    </Button>
                </Row>
            </Container>
        )
    }

}