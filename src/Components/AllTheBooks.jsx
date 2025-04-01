import { Card, Col, Container, Row, Button } from "react-bootstrap";
import librifantasy from "../data/fantasy.json";

const AllTheBooks = function () {
  return (
    <Container>
      <h1 className=" pb-4">I nostri libri</h1>
      <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
        {librifantasy.map((libro) => {
          return (
            <Col key={libro.asin} className="">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={libro.img}
                  style={{ height: "350px", }}
                  className=" object-fit-scale"
                />
                <Card.Body className="  d-flex flex-column">
                  <Card.Title>{libro.title}</Card.Title>
                  <Card.Text className=" ">
                    Categoria: {libro.category}
                  </Card.Text>
                  <Button variant="primary" className=" mt-auto">
                   
                    Compralo per {libro.price}-$
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
