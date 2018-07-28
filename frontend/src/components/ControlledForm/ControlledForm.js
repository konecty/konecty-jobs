import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import ReactDOM from 'react-dom'

export default class ControlledForm extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.phoneVerification = this.phoneVerification.bind(this);
        this.removeErrors = this.removeErrors.bind(this);

        this.state = {
            nome: "",
            phone: "",
            email: "",
            msg: ""
        }
    }
    
    handleChange(e){
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit(){
        const withError = Object.entries(this.state)
            .filter(campo => campo[1].length <= 0)
            .map(campo => `#${campo[0]}`);

        const nodes = ReactDOM.findDOMNode(this).querySelectorAll(withError)
        for(const campo of nodes)
            campo.classList.add("is-invalid");
    }

    phoneVerification(e){
        if(!["Backspace", "Tab"].includes(e.key) && isNaN(e.key)) 
            e.preventDefault();
        else this.handleChange(e);
    }

    removeErrors(e){
        e.target.classList.remove("is-invalid");
    }

    render(){
        return (
         <Row className="form">
            <Col xs="12">
              Leave us a message. We will get back to you shortly.
            </Col>

            {/*         Nome           */}
            <div className="col-12 my-2 my-md-4">
              <input type="text" id="nome" placeholder="Name" 
                    onChange={this.handleChange} onFocus={this.removeErrors}
                    className="form-control " />
            </div>

            {/*         Telefone           */}
            <div className="col-12 col-md-4 mb-2 mb-md-4">
              <input type="text" id="phone" placeholder="Phone" 
                      onKeyDown={this.phoneVerification} onFocus={this.removeErrors}
                      className="form-control " />
            </div>

            {/*         Email           */}
            <div className="col-12 col-md-8 mb-2 mb-md-4">
              <input type="email" id="email" placeholder="Email"
                    onChange={this.handleChange} onFocus={this.removeErrors}
                    className="form-control " />
            </div>

            {/*         Mensagem           */}
            <div className="col-12 mb-2 mb-md-4">
              <textarea rows="6" id="msg" placeholder="Message" 
                        onChange={this.handleChange} onFocus={this.removeErrors}
                        className="form-control" />
            </div>

            <div className="col-12 col-md-4 offset-md-8">
                <Button color="info" className="w-100" onClick={this.handleSubmit}>Send</Button>
            </div>
          </Row>
        );
    }
}