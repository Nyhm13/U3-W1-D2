import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
const Token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2NiNzFkNDM2ZTAwMTVkYTI3MGIiLCJpYXQiOjE3NDM2ODI3NDMsImV4cCI6MTc0NDg5MjM0M30.HfcucgurYn1ojdw74CO-z3977cDs5bMha-19KgrzBBo"


const SingleComment = function (props) {
  console.log("cosa mi porta", props);
  const deleteComment = () => {
    fetch(URL+props.comment._id,{
        method: 'DELETE',
        headers: {
            authorization: Token

        }
    })
    .then((response)=>{
        if (response.ok){
            alert('recensione eliminata!')
        } else {
            throw new Error( 'non eliminata')

        }
    })
    .catch((err)=>{

        console.log(err)
    })

  }

  return (
    <>
      <ListGroup.Item className=" d-flex flex-column">
        <div className="d-flex justify-content-between">
        <p>{props.comment.comment}</p>
        <p>{props.comment.rate} /5</p>
        </div>
        <Button variant="danger" onClick={deleteComment}>DELETE</Button>
      </ListGroup.Item>
    </>
  );
};

export default SingleComment;
