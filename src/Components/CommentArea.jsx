import { Component } from "react";
import { Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const Token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2NiNzFkNDM2ZTAwMTVkYTI3MGIiLCJpYXQiOjE3NDM2ODI3NDMsImV4cCI6MTc0NDg5MjM0M30.HfcucgurYn1ojdw74CO-z3977cDs5bMha-19KgrzBBo"
const Url='https://striveschool-api.herokuapp.com/api/comments/'
class CommentArea extends Component {
  
    
    state= {
        comments: [],
    }
      
    getComments= ()=>{
        console.log('questo e l`id',this.props.asin)
        fetch(Url+this.props.asin,{
            headers:{
                Authorization: Token,
            }
        })
        .then((response)=>{
            if (response.ok){
                console.log('commenti',response)
                return response.json()
            } else {
                throw new Error('errore nella fetch')
            }
        }).then((data)=>{
            console.log (data)
            this.setState({comments:data})
        })
        .catch((err)=>{
            console.log('errore',err)
        })
    }
    componentDidMount() {
        this.getComments();
      }

    render() {
    return (
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Recensioni</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
      </Form>
    );
  }
}

export default CommentArea;
