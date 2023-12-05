import './Card.css'
import {FormButton} from '../index';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-grid-system';
import { RiHeart3Fill , RiMessage2Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const CardServices = (props) => {
  return (
    <>
        <div className="Card">
          <div className="MainCard">
              <div className="topCard">
                  <img src={props.image} alt="" />
              </div>
              <div className="BottomCrad">
                  <h1>{props.title}</h1>
              </div>
          </div>
          <div className="SecondCard">
              <div>
                <h1>{props.title}</h1>
                <p>{props.para}</p>
                <FormButton>SEE ALL</FormButton>
              </div>
          </div>
        </div>
    </>
  )
}


const CardServicesPage = (props) => {
  return (
    <>
        <Card className='ServiceCard'>
          <Card.Img style={{height : '50%' ,  borderRadius : 0}} variant="top" src={props.image} />
          <Card.Body>
            <Card.Title style={{fontWeight : 'bold'}}>{props.title}</Card.Title>
            <Card.Text>
                {props.Text}
            </Card.Text>
            <button className='btn-services'>Click Here</button>
          </Card.Body>
        </Card>
    </>
  )
}



const BlogCard = (props) => {
  return (
    <>
        <Col className='CardColumn' md={4}>
          <Card className='ServiceCard'>
            <Card.Img style={{height : '50%' ,  borderRadius : 0}} variant="top" src={props.image} />
            <div className="LikeComment">
              <div className="Like">
                <RiHeart3Fill className='icon'/><small>Like</small>
              </div>
              <div className="Comment">
              <RiMessage2Fill className='icon'/><small>Comment</small>
              </div>
            </div>
            <Card.Body>
              <Card.Title style={{fontWeight : 'bold'}}>{props.title}</Card.Title>
              <Card.Text>
                  {props.Text}
              </Card.Text>
              <div className="BottomOfCard">
                <NavLink to="/Contact">Ask A Question</NavLink>
                <NavLink to="/Blog01" className='btn-services btn-blog'>Details</NavLink>
              </div>
            </Card.Body>
          </Card>
        </Col>
    </>
  )
}



export {CardServicesPage , BlogCard }
export default CardServices;