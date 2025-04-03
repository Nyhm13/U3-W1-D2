import { Component } from "react";
import Form from 'react-bootstrap/Form';

class AddComment extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <FormLabel>
            <Form.Control type="text" placeholder="lascia un commento">

            </Form.Control>
          </FormLabel>
        </FormGroup>
      </Form>
    );
  }
}
export default AddComment;
