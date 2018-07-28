import React, { Component } from "react";
import { Row, Col } from 'reactstrap';

import './Style.css';
export default class Item extends Component {
  constructor(props) {
    super(props);

    this.item = this.props.map ? "map" : this.props.graph ? "graph" : "view";
    this.itens = this.itens();
  }

  render() {
    return (
      <Row className="text-center align-items-center py-3">
        <Col xs="2" md="12" className="pl-xs-2">
            <img src={this.itens[this.item].image} alt="Mapa de processos" />
        </Col>

        <Col xs="10" md="12">
            <h4 className="title py-2">{this.itens[this.item].title}</h4>
        </Col>

        <div className="d-block d-md-none col-2"></div>
        <Col xs={true} md="12" >
            <div className="text">{this.itens[this.item].text}</div>
        </Col>
      </Row>
    );
  }

  itens() {
    return {
      map: {
        image: "mapa-de-processos-icon.png",
        title: "Map of processes",
        text: `Manage activities and 
                processes organizing your 
                project and finding the best
                way to optimize time and 
                resources.`
      },
      graph: {
        image: "forecast-e-relatorios-icon.png",
        title: "Forecast and Reports",
        text: `Run your business with
                predictability based on the 
                forecast coming from your
                sales pipeline and on the 
                reports coming from your past 
                sales experience.`
      },
      view: {
        image: "visao-em-real-time-icon.png",
        title: "Real-time View",
        text: `Don’t wait for tomorrow to 
                make decisions! Get all this 
                information in real-time, 
                having the power to act fast 
                and accurately at any time.`
      }
    };
  }
}
