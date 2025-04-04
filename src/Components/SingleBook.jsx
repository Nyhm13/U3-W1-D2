import { Component } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Col  className="">
        <Card
          className={`h-100 ${
            this.state.selected ? "border-5 border-black" : ""
          }`}
        >
          <Card.Img
            variant="top"
            src={this.props.libro.img}
            style={{ height: "350px" }}
            className=" object-fit-scale"
            onClick={this.handleSelected}
          />
          <Card.Body className="  d-flex flex-column">
            <Card.Title>{this.props.libro.title}</Card.Title>
            <Card.Text className=" ">
              Categoria: {this.props.libro.category}
            </Card.Text>

            <Button variant="primary" className=" mt-auto">
              Compralo per {this.props.libro.price}-$
            </Button>
        {this.state.selected && <CommentArea asin={this.props.libro.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
