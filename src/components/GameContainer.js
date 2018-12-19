import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";



class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  }

  render() {
    return (
      <Container title='Clicky Game!' subtitle="Click on an image to earn points, but don't click on any more than once!">
        <Row>
          <Col size="xs-1 md-3">
            <Card image="./images/background.jpeg">
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
