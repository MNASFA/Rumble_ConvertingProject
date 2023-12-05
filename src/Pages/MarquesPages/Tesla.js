import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/Tesla_logo.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { TeslaCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";
const Tesla = () => {
  const Columns = TeslaCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })
  return (
    <>
      <MarquePage
      
      title = "Tesla"
      Span = "T"
      DescriptionTitle = "esla" 
      DescriptionPara = "Tesla is an American electric vehicle and clean energy company founded in 2003 by Elon Musk, JB Straubel, Martin Eberhard, Marc Tarpenning, and Ian Wright. Tesla designs and manufactures electric cars, battery energy storage systems, and solar panels. Tesla's cars are known for their high performance, long range, and innovative features, such as over-the-air updates and advanced autonomous driving capabilities. Tesla's mission is to accelerate the transition to sustainable energy and to create a better, cleaner, and more sustainable future."
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

export default Tesla