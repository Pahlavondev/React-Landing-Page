import React from "react";
import logoFooter from "../assets/logo.png";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="6">
            <div className="brand">
              <img className="brandImage" src={logoFooter} alt="Footer Logo" />
              <p className="brandText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>

          <Col className="footerWrapper" md="4">
            <div>
              <p className="productsTitle">Products</p>
              <ul className="products-list">
                <li className="products-item">
                  <a className="products-link" href="#">
                    Trending
                  </a>
                </li>

                <li className="products-item">
                  <a className="products-link" href="#">
                    My Account
                  </a>
                </li>

                <li className="products-item">
                  <a className="products-link" href="#">
                    Vendors
                  </a>
                </li>

                <li className="products-item">
                  <a className="products-link" href="#">
                    Brands
                  </a>
                </li>

                <li className="products-item">
                  <a className="products-link" href="#">
                    StoreFront
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="productsTitle">Legals</p>
              <ul className="products-list">
                <li className="products-item">
                  <a className="products-link" href="#">
                    License
                  </a>
                </li>

                <li className="products-item">
                  <a className="products-link" href="#">
                    Refund Policy
                  </a>
                </li>

                <li className="products-item">
                  <a className="products-link" href="#">
                    About Us
                  </a>
                </li>

                <li className="products-item">
                  <a className="products-link" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="productsTitle">Contacts</p>
              <ul className="products-list">
                <li className="products-item">
                  <p className="products-text">
                    Fell free get in touch with us via phone or send us a
                    message
                  </p>
                </li>

                <li className="products-item">
                  <a className="products-link" href="tel: +1 234 567 89 10">
                    +1 234 567 89 10
                  </a>
                </li>

                <li className="products-item">
                  <a className="products-link" href="mailto:support@khoomi.com">
                    support@khoomi.com
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
