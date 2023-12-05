import './Footer.css'
import Footerlogo from '../../Components/assets/img/footerlogo.png'
import { FaPhoneAlt , FaMapMarkerAlt ,FaEnvelope,FaBusinessTime } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
              <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3 logoDiv">
                      <img src={Footerlogo} alt="FootLogo" className='footlogo'/>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum culpa nemo sed, molestiae voluptate similique nostrum consequatur. Ut est, vero corrupti, amet laborum sed tempora aut officia itaque, exercitationem libero!
                      </p>
                  </div>

                  <hr className="clearfix w-100 d-md-none pb-0"/>

                  <div className="col-md-3 mb-md-0 mb-3">
                      <h5 className="text-uppercase">About Us</h5>
                      <ul className="list-unstyled">
                          <li><FaPhoneAlt className='icon'/>05 20 21 41 33</li>
                          <li><FaEnvelope className='icon'/>Rumble@cars.com</li>
                          <li><FaMapMarkerAlt className='icon'/>182 main street pert habour 8007</li>
                          <li><FaBusinessTime className='icon'/>Mon-sat 8:00-18:00 Sunday Closed</li>
                      </ul>
                  </div>

                  <div className="col-md-3 mb-md-0 mb-3">
                      <h5 className="text-uppercase">Services</h5>
                      <ul className="list-unstyled">
                          <li><a href="#!">ENGINE DIAGNOSTICS</a></li>
                          <li><a href="#!">BRAKE REPAIR</a></li>
                          <li><a href="#!">TIRE AND WHEEL</a></li>
                          <li><a href="#!">LUBE, OIL AND FILTERS</a></li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="footer-copyright text-center py-3">© 2020 Copyright : Rumble Cars
          </div>

      </footer>
    </>
  )
}

export default Footer