import './Team.css'
import '../../Components/TitleandPara/TitleandPara.css'
import { Container } from 'react-bootstrap'
import {Slider} from '../../Components/index'






const Team = () => {
    

  return (
    <>
       <div className="TeamContainer">
          <Container>
              <div className="description-top">
                    <strong>Our <span>Team</span></strong>
                    <br /><br /><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae itaque quibusdam repellat non obcaecati, cupiditate possimus aperiam quidem atque necessitatibus laborum optio pariatur quo blanditiis dicta, qui veniam quisquam.</p>
              </div>    
             <div className="slidercontainer">
              <Slider/>
             </div>
            </Container>
       </div>
    </>
  )
}

export default Team