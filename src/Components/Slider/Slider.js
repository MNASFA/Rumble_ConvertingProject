import './Slider.css'
import Slider from "react-slick";
import image from '../../Components/assets/img/index'
import {CardServices} from '../../Components/index'

const SliderTeam = () => {

  const settings = {

            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            speed: 500,
            responsive: [
            {
            breakpoint: 1000,
            settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
            }
            }
            ]
  };
  return (
    <>
      <Slider  {...settings}>
            <div className='Card'>
                  <CardServices title='John Wick' image= {image.Person1} para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti modi magnam cupiditate quia blanditiis sit in, explicabo atque quo."/>
            </div>  
            <div className='Card'>
                  <CardServices title='Leonardo Decaprio' image= {image.Person2} para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti modi magnam cupiditate quia blanditiis sit in, explicabo atque quo."/> 
            </div>  
            <div className='Card'>
                  <CardServices title='Leo Messi' image= {image.Person3} para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti modi magnam cupiditate quia blanditiis sit in, explicabo atque quo."/>
            </div>  
            <div className='Card'>
                  <CardServices title='Hakim Ziyech' image= {image.Person4} para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti modi magnam cupiditate quia blanditiis sit in, explicabo atque quo."/>   
            </div>     
            <div className='Card'>
                  <CardServices title='Enzo Fernandez' image= {image.Person5} para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti modi magnam cupiditate quia blanditiis sit in, explicabo atque quo."/>   
            </div>     
            <div className='Card'>
                  <CardServices title='Philipe Lahm' image= {image.Person6} para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti modi magnam cupiditate quia blanditiis sit in, explicabo atque quo."/>   
            </div>                                                                     
      </Slider>
    </>
  )
}

export default SliderTeam