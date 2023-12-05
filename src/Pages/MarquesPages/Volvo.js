import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/Volvo-logo-2014-1920x1080.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { VolvoCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";
const Volvo = () => {
  const Columns = VolvoCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })

  

  return (
    <>
      <MarquePage
      
      title = "Volvo"
      Span = "V"
      DescriptionTitle = "olvo" 
      DescriptionPara = "Volvo is a Swedish luxury automobile manufacturer founded in 1927 by Assar Gabrielsson and Gustav Larson. It is known for producing safe and reliable cars, and has a reputation for engineering excellence and innovation. Volvo produces a range of vehicles including sedans, SUVs, and crossover vehicles, and has a strong focus on safety features, such as airbags, seatbelts, and advanced driver assistance systems. Volvo is also committed to reducing the environmental impact of its vehicles and has set a goal to have half of its sales be fully electric by 2025. Volvo's mission is to create safe, sustainable, and convenient transportation solutions that improve people's lives."
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

export default Volvo