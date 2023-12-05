import  './TopBar.css'
import { RiFacebookBoxFill,RiInstagramFill } from "react-icons/ri";
import { FaLinkedin,FaTwitter } from "react-icons/fa";


const TopBar = () => {
  return (
    <>
        <div className="topbarContainer">
          <div className="container">
            <ul className="rightside">
               
                  <li><a href="#">
                      <FaLinkedin/>
                    </a></li>

                    <li><a href="#">
                      <FaTwitter/>
                    </a></li>

                    <li><a href="#">
                      <RiFacebookBoxFill/>
                    </a></li>

                    <li><a href="#">
                      <RiInstagramFill/>
                    </a></li>
               
            </ul>
            <div className="leftside">
                  <div className="btnBooking">
                    <li><a href="#">Booking Now</a></li>
                  </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TopBar