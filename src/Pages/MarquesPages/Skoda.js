import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/Skoda-logo-2016-1920x1080.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { SkodaCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";
const Skoda = () => {
  const Columns = SkodaCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })
  return (
    <>
      <MarquePage
      
      title = "SKODA"
      Span = "S"
      DescriptionTitle = "koda" 
      DescriptionPara = "Skoda is a Czech automobile manufacturer founded in 1895 as Laurin & Klement. It is currently owned by the Volkswagen Group and is one of the oldest car manufacturers in the world. Skoda produces a range of vehicles including sedans, hatchbacks, SUVs, and crossovers. Skoda is known for offering good value for money and for producing reliable and practical cars that are popular in Europe and other parts of the world."
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

export default Skoda