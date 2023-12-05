import ListGroup from 'react-bootstrap/ListGroup';
import images from '../../Components/assets/img/index'
import { NavLink } from 'react-router-dom';
import { BsFillClockFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";

const OtherBlogs = (props) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item className='ListGroupItem'> 
            <div className="Img"><img src={images.Blog01} alt="Blog01" style={{width : "150px"}}/></div>
            <div className="OtherBlogContent">
              <NavLink to={props.link} className="bloglink">Electric Cars: With the increasing focus on sustainability</NavLink>
              <div className="BottomDeatils">
                <div><BsFillClockFill className="icon"/> 11/05/2023</div>
                <div><RiMessage2Fill className="icon"/> 20</div>
              </div>
            </div>
        </ListGroup.Item>

        <ListGroup.Item className='ListGroupItem'> 
            <div className="Img"><img src={images.Blog02} alt="Blog01" style={{width : "150px"}}/></div>
            <div className="OtherBlogContent">
              <NavLink to={props.link} className="bloglink">Electric Cars: With the increasing focus on sustainability</NavLink>
              <div className="BottomDeatils">
                <div><BsFillClockFill className="icon"/> 11/05/2023</div>
                <div><RiMessage2Fill className="icon"/> 20</div>
              </div>
            </div>
        </ListGroup.Item>

        <ListGroup.Item className='ListGroupItem'> 
            <div className="Img"><img src={images.Blog03} alt="Blog01" style={{width : "150px"}}/></div>
            <div className="OtherBlogContent">
              <NavLink to={props.link} className="bloglink">Electric Cars: With the increasing focus on sustainability</NavLink>
              <div className="BottomDeatils">
                <div><BsFillClockFill className="icon"/> 11/05/2023</div>
                <div><RiMessage2Fill className="icon"/> 20</div>
              </div>
            </div>
        </ListGroup.Item>

    
      </ListGroup>
    </>
  )
}

export default OtherBlogs