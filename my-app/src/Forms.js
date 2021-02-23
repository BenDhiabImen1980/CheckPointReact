import './App.css';
//import{ Form} from 'react-bootstrap'
 import {Form,Col,Row,Button} from 'react-bootstrap'
 //import Form from 'react-bootstrap/Form'


function Forms() {
  return (
  <div>
    <Form>
    
  <Row>
    <Col>
      <label>First Name:</label>
      <Form.Control placeholder="First name" width="20%" />
    </Col>
    <Col>
      <label>Last Name:</label>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <br></br>
 <h5>p</h5>
 <br></br>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <br></br>
 <h5>p</h5>
 <br></br>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Adress 1" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Adress 2" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  {/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button> */}
</Form>



  </div>
  );
}

export default Forms;