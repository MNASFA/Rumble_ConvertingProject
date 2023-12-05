import './Contact.css'
import { Container } from 'react-bootstrap'
import { TopSectionPages,TitleandPara} from '../../Components/index'
import {ContactForm } from '../../Components/index'
import image from '../../Components/assets/img/Connected world-amico.svg'

const Contact = () => {
  return (
    <>
     
      <TopSectionPages>CONTACT</TopSectionPages>
        <Container>

          <div className="ContactContainer">
              <div className="leftContact">
                    <img src={image} alt="ContactImage"/>
                </div>
                <div className="rightContact">
                  <ContactForm/>
                </div>
          </div>
         
        </Container>
     
    </>
  )
}

export default Contact