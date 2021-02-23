import './App.css';
import {Form,Button, Navbar,Nav,FormControl} from 'react-bootstrap'
import Feet from './Feet'
function Navbars() {
  return (
  <div>
    <p>Fiche de renseignement</p>
    <Feet/>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Contact</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Curriculum-Vitea</Nav.Link>
      <Nav.Link href="#features">Experience</Nav.Link>
      <Nav.Link href="#pricing">Attente</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  </div>
  );
}
  export default Navbars;