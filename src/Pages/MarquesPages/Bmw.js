import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/pngimg.com - bmw_logo_PNG19702.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { BmwCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";

const Bmw = () => {

  const Columns = BmwCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })

  return (
    <>
      <MarquePage
      
      title = "BMW"
      Span = "B"
      DescriptionTitle = "MW" 
      DescriptionPara = "BMW is a German luxury automobile manufacturer that produces high-performance cars, motorcycles, and engines. The company was founded in 1916 and is headquartered in Munich, Germany. BMW's cars are known for their sleek design, advanced technology, and powerful engines. Some of the most popular models include the BMW 3 Series, BMW 5 Series, and BMW X5. The company has a reputation for producing high-quality, reliable vehicles that are both fun to drive and practical for everyday use. BMW is also known for its commitment to innovation, with a focus on developing new technologies that improve fuel efficiency, reduce emissions, and enhance driver safety and comfort."
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

export default Bmw