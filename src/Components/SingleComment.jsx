import ListGroup from "react-bootstrap/ListGroup";

const SingleComment= function(props){

    return(
        <ListGroup.Item>{props.comment.comment}</ListGroup.Item>
    )

}

export default SingleComment