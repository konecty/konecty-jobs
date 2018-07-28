import React from "react";
import { Row, Col } from "reactstrap";

import { Navbar, Panel, Item } from "../../components";
import "./Style.css";

export default () => {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <section id="top-section">
        <Navbar />
        <Panel />
      </section>
      <section id="main-content" className="my-4 pl-2 pl-md-4">
        <div className="px-md-5 pt-3">
          <div className="description px-2 px-md-5">
            <p className="h3 font-weight-bold">Complete tool, from A to Z</p>
            Plan, execute and follow-up your marketing campaigns, generating
            demand for your products and
          </div>

          <Row className="justify-content-around">
            <Col md="3"> <Item map   />  </Col>
            <Col md="3"> <Item graph />  </Col>
            <Col md="3"> <Item view  />  </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};
