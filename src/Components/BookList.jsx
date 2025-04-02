import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  return (
    <Container className="my-5">
        <h1 className=" fw-bold">{props.tipo}</h1>
      <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {props.listaLibri.slice(0,10).map((libro) => {
          return <SingleBook key={libro.asin} libro={libro} />;
        })}
      </Row>
    </Container>
  );
};
export default BookList;
