import React from "react";
import { Container, Row, Col, CardBody, CardFooter, Card } from "reactstrap";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import image5 from "../assets/img5.png";

const NewCollection = () => {
  return (
    <div className="newCollection">
      <Container>
        <Row>
          <Col className="newCollectionWrapper" md="12">
            <p>Straight From Nike</p>
            <h4>New Collection</h4>
          </Col>

          <Col className="cardsWrapper" lg="6" md="12">
            <Row>
              <Col className="cards" lg="6" md="6">
                <Card className="card">
                  <CardBody className="card-body">
                    <img
                      className="card-image"
                      src={image1}
                      alt="sneaker image"
                    />
                  </CardBody>
                  <CardFooter className="card-footer">
                    <div className="cardWrapper-footer">
                      <p>Nike Air Force 1</p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>

              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody className="card-body">
                    <img
                      className="card-image"
                      src={image2}
                      alt="sneaker image"
                    />
                  </CardBody>
                  <CardFooter className="card-footer">
                    <div className="cardWrapper-footer">
                      <p>NikeCourt Air</p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>

              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody className="card-body">
                    <img
                      className="card-image"
                      src={image3}
                      alt="sneaker image"
                    />
                  </CardBody>
                  <CardFooter className="card-footer">
                    <div className="cardWrapper-footer">
                      <p>Nike SB Zoom</p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>

              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody className="card-body">
                    <img
                      className="card-image"
                      src={image4}
                      alt="sneaker image"
                    />
                  </CardBody>
                  <CardFooter className="card-footer">
                    <div className="cardWrapper-footer">
                      <p>Nike Signal</p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col className="cardsContent" lg="6" md="12">
            <Card className="cardContent">
              <CardBody className="cardContent-body">
                <div className="productPrice">
                  <span>SALE -50%</span>
                  <span>$99</span>
                </div>

                <img
                  className="cardContent-image"
                  src={image5}
                  alt="sneaker image"
                />
              </CardBody>

              <CardFooter className="cardContent-footer">
                <h4 className="productName">Nike Air Force 1 Shadow</h4>
                <p className="productBrand">Brand: Nike</p>
              </CardFooter>
            </Card>
          </Col>

          <Col md="12" className="newCollection-button">
            <a className="exploreBtnProducts" href="#">
              Explore Other Products
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewCollection;
