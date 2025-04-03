import { Component } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup >
        {
            this.props.comment.map((comment)=>{
                return (
                    <SingleComment key={comment._id} comment={comment}/>
                )

            })              
            
        }
      </ListGroup>
    );
  }
}

export default CommentsList;
