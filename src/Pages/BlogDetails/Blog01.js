import './blog.css'
import {Container } from 'react-bootstrap'
import images from '../../Components/assets/img/index'
import { BlogContent  , OtherBlogs} from '../../Components';

const Blog01 = () => {

  return (
    <>
      <Container>
        <div className="BlogDetailsContainer">
          <div className="leftDetails">
              <div className="imgsection">
                <img src={images.Blog1} alt="Blog01 Image"/>
              </div>
              <div className="BigTitle">
                <div className="rightBigTitle">
                  <div className="Date">10 <br /> Day</div>
                  <img src={images.BigTitle} alt="Title Icon" className='bigtitle' />
                </div>
                <h1>Cars and Maintenance Tips</h1>
              </div>
             <BlogContent/>
          </div>
          <div className="rightDetails">
            <OtherBlogs link = "/Blog"/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog01