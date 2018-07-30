import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {

  render() {
      return (
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src="img/logo.png" />
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#product">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#company">Company</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#pricing">Princing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Header */}
            <header className="masthead">
                <div className="container">
                    <div className="intro-text text-left">
                        <h2 className="intro-lead-in">
                            Manage, get in touch and get more clients.
                        </h2>
                        <p>
                            Konecty is a CRM Tool focused on offering users facility, flexibility, and speed,
                            allowing customization and development of new applications.
                        </p>
                        <div className="same-size-btns">
                            <a className="btn btn-primary">Watch Demo <i className="fa fa-play" /></a>
                            <a className="btn btn-outline-secondary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </header>
            {/* Services */}
            <section id="services">
                <div className="container element-description">
                    <div className="row">
                        <div className="col-lg-12 text-left">
                            <h2 className="heading">
                                Complete tool, from A to Z
                            </h2>
                            <h3 className="subheading text-muted">
                                Plan, execute and follow-up your marketing campaigns, generating demand for your products and services.
                            </h3>
                        </div>
                    </div>
                    <div id="q" className="row text-center text-muted">
                        <div className="col-md-4">
                            <span className="fa-3x">
                                <i className="fa fa-map fa-inverse text-primary" />
                            </span>
                            <h4 className="service-heading">Map of processes</h4>
                            <p>Manage activities and processes organizing your project and finding the best way to optimize time and resources.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-3x">
                                <i className="fa fa-bar-chart text-primary" />
                            </span>
                            <h4 className="service-heading">Forecast &amp; Reports</h4>
                            <p>Run your business with predictability based on the forecast coming from your sales pipeline and on the reports coming from your past sales experience.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-3x">
                                <i className="fa fa-tv text-primary" />
                            </span>
                            <h4 className="service-heading">Real-time view</h4>
                            <p>Don't wait for tomorrow to make decisions! Get all this information in real-time, having the power to act fast and accurately at any time.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section id="contact">
                <div className="lg-container container">
                    <div className="row">
                        <div className="col-lg-12 text-left">
                            <h2 className="heading">Get in Touch</h2>
                            <h3 className="subheading text-muted">Contact us and learn how to optimize your sales and organize all the contacts and conversions your campaign generates.</h3>
                        </div>
                        <div className="col-lg-12 text-left md-margin">
                            <h3 className="text-dark">
                                +55 51 3085 5151</h3>
                            <p className="text-dark">contact@konect.com</p>
                        </div>
                        <div className="col-lg-12 text-left">
                            <p className="text-muted">Leave us a message! We will get back to you shortly.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Name" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone" required="required" data-validation-required-message="Phone" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="Email" required="required" data-validation-required-message="Email" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control noresize" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Message" defaultValue={""} />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="clearfix" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default App;
