import React from 'react';
var homePage = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="author" content="Felipe Cabreira" />
          <title>Konecty - Online CRM Tool</title>
          <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="css/style.css" rel="stylesheet" />
          <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=ABeeZee" type="text/css" rel="stylesheet" />
          <link rel="icon" type="image/png" href="img/favicon.png" />
          {/* Navigation */}
          <nav className="navbar navbar-shrink navbar-expand-lg fixed-top" id="navPrincipal">
            <a className="navbar-brand js-scroll-trigger" href="#mainBody">
              <img src="img/logo.png" />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarHorizontal" aria-controls="navbarHorizontal" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarHorizontal">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a href="#product" className="nav-link js-scroll-trigger">Product</a>
                </li>
                <li className="nav-item">
                  <a href="#company" className="nav-link js-scroll-trigger">Company</a>
                </li>
                <li className="nav-item">
                  <a href="#pricing" className="nav-link js-scroll-trigger">Princing</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link js-scroll-trigger">Contact</a>
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
                  Konecty is a CRM Tool focused on offering users facility, flexibility, and speed, allowing customization and development
                  of new applications.
                </p>
                <div className="buttons-center row">
                  <a className="btn btn-primary col-10 col-xl-4">Watch Demo
                    <i className="fa fa-play" />
                  </a>
                  <a className="btn btn-outline-secondary col-10 col-xl-4">Contact Us</a>
                </div>
              </div>
            </div>
          </header>
          {/* Services */}
          <section id="services" className="hideme">
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
              <div className="row text-center text-muted">
                <div className="col-md-4">
                  <div className="row">
                    <span className="fa-3x col-2 col-xl-10">
                      <i className="fa fa-map icon-primary" />
                    </span>
                    <div className="col-10">
                      <h4 className="service-heading">Map of processes</h4>
                      <p>Manage activities and processes organizing your project and finding the best way to optimize
                        time and resources.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <span className="fa-3x col-2 col-xl-10">
                      <i className="fa fa-bar-chart icon-primary" />
                    </span>
                    <div className="col-10">
                      <h4 className="service-heading">Forecast &amp; Reports</h4>
                      <p>Run your business with predictability based on the forecast coming from your sales pipeline and
                        on the reports coming from your past sales experience.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <span className="fa-3x col-2 col-xl-10">
                      <i className="fa fa-tv icon-primary" />
                    </span>
                    <div className="col-10">
                      <h4 className="service-heading">Real-time view</h4>
                      <p>Don't wait for tomorrow to make decisions! Get all this information in real-time, having the
                        power to act fast and accurately at any time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact">
            <div className="lg-container container">
              <div className="row">
                <div className="col-lg-12 text-left">
                  <h2 className="heading size-title">Get in Touch</h2>
                  <h3 className="subheading text-muted">Contact us and learn how to optimize your sales and organize all the contacts and conversions your campaign
                    generates.
                  </h3>
                </div>
                <div className="col-lg-12 text-left md-margin">
                  <h3 className="text-dark">
                    +55 51 3085 5151</h3>
                  <p className="text-dark">contact@konect.com</p>
                </div>
                <div className="col-lg-12 text-left">
                  <p className="text-muted">Leave us a message. We will get back to you shortly.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form noValidate="novalidate" id="contactForm" name="formPrincipal">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Name" data-validation-required-message="Name" required="required" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="input-group input-inline">
                      <input className="form-control btn-phone" id="phone" type="tel" placeholder="Phone" data-validation-required-message="Phone" required="required" />
                      <p className="help-block text-danger" />
                      <input className="form-control btn-email" id="email" type="email" placeholder="Email" data-validation-required-message="Email" required="required" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control noresize" id="message" rows={5} placeholder="Message" data-validation-required-message="Message" required="required" defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* IMPORT JS / JQUERY */}
        </div>
      );
    }
  });
  export default homePage;