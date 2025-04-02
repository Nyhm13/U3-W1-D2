import { Card, Col, Container, Row, Button } from "react-bootstrap";

const SingleBook=function({props}){
    return (
        
            <Col key={props.asin} className="">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={props.img}
                  style={{ height: "350px", }}
                  className=" object-fit-scale"
                />
                <Card.Body className="  d-flex flex-column">
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Text className=" ">
                    Categoria: {props.category}
                  </Card.Text>
                  <Button variant="primary" className=" mt-auto">
                   
                    Compralo per {props.price}-$
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          
      );
    };


export default SingleBook