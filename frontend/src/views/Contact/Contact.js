import React from "react";
import { Navbar, ControlledForm } from "../../components";

import "./Style.css";
export default () => {
  return (
    <div id="contact">
      <Navbar style={{ backgroundColor: "#293641" }} />

      <div className="w-100 my-2 my-md-5"></div>

      <section className="d-flex justify-content-center">
        <div className="contacto">
          <p className="h2">Get in Touch</p>
          <p>
            Contact us and learn how to optmize your sales and organize all the
            contacts and conversations your canpaign generates.
          </p>

          <div className="w-100 py-5">
            <p className="h3">+55 51 3085 5151</p>
            contact@konect.com
          </div>

          <ControlledForm />
        </div>
      </section>
    </div>
  );
};
