import { Container, Row ,Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container className="my-5">
        <Row className="justify-content-center my-5">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="cerca un libro"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
        <h1 className=" fw-bold">{this.props.tipo}</h1>
        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
          {this.props.listaLibri.filter((libro)=>{
            if (
                libro.title.toLowerCase().includes(this.state.search.toLowerCase())
            ){
                return true
            } else{
                return false
            }
          }).map((libro) => {
            return <SingleBook key={libro.asin} libro={libro} />;
          })}
        </Row>
      </Container>
    );
  }
}
export default BookList;
