import './Services.css'
import { Container } from 'react-bootstrap'
import { TopSectionPages, TitleandPara ,CardServicesPage } from '../../Components/index'
import { MostPopularservices } from '../../Data/MostReplayed'
import image from '../../Components/assets/img/Car accesories-pana.svg'
import { RiCustomerService2Line , } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Services = () => {

  const Columns = MostPopularservices.map(column => {
    return <CardServicesPage Key={column.id} image={column.image} Text={column.Text} title={column.title} btn = {column.btn}/>
  })

  return (
    <>
        <TopSectionPages>SERVICES</TopSectionPages>
        <Container>
              <div className="ServicesDescription">
                    <div className="left">
                        <h1>WELCOME TO <span>R</span>UMBLE</h1>
                        <br />
                        <p>

                          Welcome to our vehicle company! We offer a wide range of services to ensure that your vehicle

                          is always in top condition and ready to hit the road. 

                          <br />

                          Welcome to our vehicle company! We offer a wide range of services to ensure that your vehicle is always in top 
                          
                          condition and ready to hit the road.

                          Our services include regular maintenance such as oil changes, tire rotations, and brake inspections to 
                          
                          keep your vehicle running smoothly and safely. We also offer more advanced
                          
                          services such as engine diagnostics, transmission repairs, and electrical system troubleshooting.

                        </p>
                    </div>
                    <div className="right">
                          <img src={image} alt="Description-image" />
                    </div>
              </div>
       </Container>

        <div className="Services2section">
          <div className="serviceitem">
              <RiCustomerService2Line className='serviceicons'/>
              <h1>Sample Headline</h1>
              <p>
                
                Sample text. Click to select the text box. 

                Click again or double click to start editing the text.
              
              </p>
          </div>

          <div className="serviceitem">
              <FaMoneyCheckAlt className='serviceicons'/>
              <h1>Sample Headline</h1>
              <p>
                
                Sample text. Click to select the text box. 

                Click again or double click to start editing the text.
              
              </p>
          </div>

          <div className="serviceitem">
              <BiHelpCircle className='serviceicons'/>
              <h1>Sample Headline</h1>
              <p>
                
                Sample text. Click to select the text box. 

                Click again or double click to start editing the text.
              
              </p>
          </div>
        </div>

      <Container>
        <div className="ServicesSectionPage">
            <TitleandPara 
                    left="Our"
                    right="Services"
                    paragraphe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quidem animi. Quo, ullam nesciunt, amet alias recusandae repellat eos voluptas sunt odio odit veritatis aut porro illum qui! Dignissimos, ipsa?"
            />
            <div className="ServicesGrid">
                {Columns}
            </div>
        </div>
      </Container>
    </>
  )
}

export default Services