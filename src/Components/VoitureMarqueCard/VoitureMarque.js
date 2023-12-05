import './VoitureMarque.css'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-grid-system';
import { FaPhoneAlt } from "react-icons/fa";

const VoitureMarque = (props) => {
  return (
    <>
      <Col className='CardColumn' md={4}>
          <Card className='ServiceCard'>
            <Card.Img style={{height : '250px' ,  borderRadius : 0}} variant="top" src={props.image} />
            <Card.Body>
              <Card.Title style={{fontWeight : 'bold'}}>{props.title}</Card.Title>
              <Card.Text>
                  {props.Text}
              </Card.Text>
              <div className="BottomOfCard">
              <button className='btn-services btn-voiture btn-blog'><FaPhoneAlt/>{props.Phone}</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
    </>
  )
}

export default VoitureMarque