import React from "react";
import Trend from "../JSON/Trending.json";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

const Trending = () => {
  return (
    <div className="trending">
      <div className="pageTitles">
        <p>Top Products</p>
        <h4>Trending This Week</h4>
      </div>

      <Container className="trendingCards">
        <Row>
          {Trend.map((post, id) => {
            return (
              <Col className="trendingcol" md="3" key={id}>
                <Card className="trendingcard">
                  <CardHeader className="trendingheader">
                    <img
                      className="trendingimage"
                      src={post.img}
                      alt="Products image"
                    />
                  </CardHeader>
                  <CardBody className="trendingbody">
                    <div className="TrendingWrapper">
                      <p className="TrendingName">{post.name}</p>
                      <span className="TrendingPrice">{post.price}</span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
