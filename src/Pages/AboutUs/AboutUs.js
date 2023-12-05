import './AboutUs.css'
import { Container } from 'react-bootstrap'
import { TopSectionPages,TitleandPara,Slider} from '../../Components/index'
import { About } from '../../Sections/index'
import './AboutUs.css'
import images from '../../Components/assets/img/index'
import {Partners} from '../../Sections/index'


const AboutUs = () => {


  return (
    <>
      <TopSectionPages>ABOUT US</TopSectionPages>¨
      <Container>
        <About/>
        <div className="sectiontwo">
          <TitleandPara 
                    left="Why"
                    right="Choose Us"
                    paragraphe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quidem animi. Quo, ullam nesciunt, amet alias recusandae repellat eos voluptas sunt odio odit veritatis aut porro illum qui! Dignissimos, ipsa?"
                />
          <div className="GridImage">
                <div className="grid">
                  <img src={images.AboutUs1} alt="image_1" />
                  <h1>Personalized Service</h1>
                </div>
                <div className="grid">
                  <img src={images.AboutUs2} alt="image_2" />
                  <h1>24/7 Support</h1>
                </div>
                <div className="grid">
                  <img src={images.AboutUs3} alt="image_3" />
                  <h1>Best Price</h1>
                </div>
                <div className="grid">
                  <img src={images.AboutUs4} alt="image_4" />
                  <h1>Trusted Company</h1>
                </div>
          </div>
        </div>
        <Partners/>
      </Container>
    </>
  )
}

export default AboutUs