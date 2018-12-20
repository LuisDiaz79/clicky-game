import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import images from "../imagelist.json"



class GameContainer extends Component {
  state = {
    images,
    result: [],
    score: 0,
    search: ""
  }

  componentDidMount() {
    this.unsortArray();
  }

  unsortArray = () => {

    let array = this.state.images;
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ images: array });

  }

  imageClick = (id) => {

    let res = this.state.result;

    if (res.includes(id)) {
      this.setState({
        result: [],
        score: 0
      });
      console.log(this.state.score);
    } else {
      res.push(id);
      this.setState({
        result: res,
        score: this.state.score + 1
      });
      console.log(this.state.score);
    }

    this.unsortArray();
  }



  render() {
    return (
      <Container title='Clicky Game!' subtitle="Click on an image to earn points, but don't click on any more than once!">
        <Row>
          <Col size="12">
            <div>
                Score = {this.state.score}
            </div>
          </Col>
        </Row>
        <Row>
          {
            this.state.images.map(element => (
              <Col key={element.id} size="xs-1 md-3">
                <Card imagesrc={element.url} clickimage={() => this.imageClick(element.id)} />
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  }
}

export default GameContainer;
