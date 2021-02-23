import './App.css';
import {Image,Col} from 'react-bootstrap'
//import Image from 'react-bootstrap/Image'
import logo from './NewTux.svg.png'
function Feet() {
  return (
  <div className="footerdiv">
     <Col xs={6} md={4}>
     <Image style={{width:"10%"}} src= {logo} roundedCircle />
    </Col>
    
  </div>
  );
}
  export default Feet;