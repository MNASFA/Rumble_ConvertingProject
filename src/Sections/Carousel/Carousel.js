import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { RiCarFill , RiMoneyEuroCircleFill ,RiComputerLine,RiBookmarkFill } from "react-icons/ri";
const Carousels = () => {
  return (
    <>
        <Carousel variant="dark">
          <Carousel.Item className='background'>
            <div className='Carousel_caption'>
            <h5>MotoMate : Your Ultimate <b>Motorcycle</b> Companion</h5>
              <ul>
                <li><RiCarFill  className='icons'/> Home Pickups</li>
                <li><RiMoneyEuroCircleFill className='icons'/> Best Price Guaranteed</li>
                <li><RiComputerLine className='icons'/> Easy Booking</li>
                <li><RiBookmarkFill className='icons'/> 24/7 Customer Care</li>
              </ul>
             <a href="#" className="findbtn">Find Out More</a>
            </div>
          </Carousel.Item>
          <Carousel.Item className='background'>
            <div className='Carousel_caption'>
              <h5>CarConnect : Your Ultimate Companion <b>Cars</b></h5>
              <ul>
                <li><RiCarFill  className='icons'/> Home Pickups</li>
                <li><RiMoneyEuroCircleFill className='icons'/> Best Price Guaranteed</li>
                <li><RiComputerLine className='icons'/> Easy Booking</li>
                <li><RiBookmarkFill className='icons'/> 24/7 Customer Care</li>
              </ul>
              <a href="#" className="findbtn">Find Out More</a>
            </div>
          </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Carousels