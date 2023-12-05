import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/Mercedes-Benz-logo-2011-1920x1080.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { MercidesCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";
const Mercides = () => {

  const Columns = MercidesCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })

  return (
    <>
      <MarquePage
      
      title = "MERCEDES BENZ"
      Span = "M"
      DescriptionTitle = "ercedes" 
      DescriptionPara = "Mercedes-Benz is a global luxury automobile brand and a division of the German company Daimler AG. The company was founded in 1926 and is headquartered in Stuttgart, Germany. Mercedes-Benz is known for producing a wide range of vehicles, including luxury sedans, coupes, convertibles, SUVs, and high-performance sports cars. The company's vehicles are characterized by their superior engineering, cutting-edge technology, and sleek design. Mercedes-Benz is also recognized for its commitment to innovation and sustainability, with a focus on developing environmentally friendly vehicles and reducing its carbon footprint. The brand has a long history of excellence in the automotive industry, and continues to be a leader in luxury vehicle design and innovation."
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

export default Mercides