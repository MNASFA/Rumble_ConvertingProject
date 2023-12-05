import './Partners.css'
import Slider from 'react-slick'
import { Container } from 'react-bootstrap'
import { TitleandPara } from '../../Components/index'
import image from '../../Components/assets/img/index'

const Partners = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1000,
            settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1
            }
            },
            {
            breakpoint: 600,
            settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
            }
            }
            ]
      };
  return (
    <>
        <div className="PartnersContainer">
            <Container>
            <TitleandPara 
                            left="Our"
                            right="Partners"
                            paragraphe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quidem animi. Quo, ullam nesciunt, amet alias recusandae repellat eos voluptas sunt odio odit veritatis aut porro illum qui! Dignissimos, ipsa?"
                        />
           <div className="slidercontainer">
            <Slider  {...settings}>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                        <div>
                            <img src={image.Sliderlogo} alt=" slider logo " />
                        </div>
                </Slider>
           </div>
            </Container>
        </div>
    </>
  )
}

export default Partners