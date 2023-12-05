import './About.css'
import Container from 'react-bootstrap/Container';
import {FormButton} from '../../Components/index';
import Aboutimg from '../../Components/assets/img/about.webp';


const About = () => {
  return (
    <>
      <Container >
        <div className="AboutContainer">
          <div className="left">
            <h1 className="title">Subaru <span>Impreza</span></h1>
            <h3>$125<span>/Day</span></h3>
            <div className="text">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nostrum hic est officiis repellendus modi harum autem perferendis magni necessitatibus laborum eum, ab, ipsam ipsum minima, corrupti temporibus rem quam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quae neque eos sunt.
              </p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam excepturi perferendis odio, voluptate nesciunt, laborum dignissimos, inventore illum explicabo vero neque mollitia. Laudantium facilis pariatur beatae adipisci dolorum impedit.</p>
              <br />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, culpa incidunt! Laborum ab, incidunt, aspernatur repellat excepturi exercitationem adipisci deleniti in molestias quae voluptatem perferendis voluptates nihil veniam tenetur totam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae temporibus aut rerum.
              </p>
            </div>
           <div className="btnreserve">
               <FormButton>Reserve Now</FormButton>
           </div>
          </div>
          <div className="right">
            <img src={Aboutimg} alt="About" />
          </div>
        </div>
      </Container>
    </>
  )
}

export default About