import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/toyota-logo-2019-3700x1200.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { ToyotaCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";
const Toyota = () => {
  const Columns = ToyotaCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })
  return (
    <>
      <MarquePage
      
      title = "TOYOTA"
      Span = "T"
      DescriptionTitle = "oyota" 
      DescriptionPara = "Toyota is a Japanese automobile manufacturer founded in 1937 by Kiichiro Toyoda. It is currently the world's largest automobile manufacturer by production and sales. Toyota produces a wide range of vehicles, including sedans, hatchbacks, SUVs, trucks, and hybrid cars. Toyota is known for its quality, reliability, and innovation, and has introduced many groundbreaking technologies over the years, such as the hybrid powertrain used in the Prius, which revolutionized the automotive industry. Toyota's mission is to provide safe, reliable, and sustainable transportation solutions to people all over the world."
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

export default Toyota