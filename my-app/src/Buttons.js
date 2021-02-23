import './App.css';
import{Button,Image,Col} from 'react-bootstrap'

function Buttons() {
  return (
    <div className="buttondiv">
      <Button variant="primary">submit</Button>{' '}
      <Button variant="primary">cancel</Button>{' '}
    </div>
  );
}

export default Buttons;