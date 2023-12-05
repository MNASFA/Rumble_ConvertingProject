import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/Citroen-logo-2009-2048x2048.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { CitroenCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";
const Citroen = () => {

  const Columns = CitroenCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })

  return (
    <>
      <MarquePage
      
      title = "CITROEN"
      Span = "C"
      DescriptionTitle = "itroen" 
      DescriptionPara = "Citroën is a French automobile manufacturer founded in 1919 by André Citroën. The company is known for its innovative and stylish cars, which have a reputation for being comfortable and reliable. Some of the most famous Citroën models include the 2CV, the DS, and the C4 Cactus. Citroën cars are popular in Europe and are sold in many countries around the world. The company is now part of the Stellantis group, which also owns other car brands such as Peugeot, Opel, and Jeep."
      img = {image}

    />

    <Container>
        <div className="VoituresMarqueGrid">
          <Row>
            {Columns}
          </Row>
        </div>
    </Container>
    </>
  )
}

export default Citroen