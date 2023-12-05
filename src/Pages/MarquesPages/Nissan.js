import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/nissan-logo-2020-black.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { NissanCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";

const Skoda = () => {

  const Columns = NissanCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })

  return (
    <>
      <MarquePage
      
      title = "NISSAN"
      Span = "N"
      DescriptionTitle = "issan" 
      DescriptionPara = "Nissan is a Japanese automotive manufacturer that produces a range of vehicles, including cars, trucks, SUVs, and electric vehicles. The company was founded in 1933 and is headquartered in Yokohama, Japan. Nissan is known for its innovative design and engineering, with a focus on producing vehicles that are both stylish and practical. Some of the most popular models include the Nissan Altima, Nissan Sentra, and Nissan Rogue. Nissan has also been a leader in the development of electric vehicles, with the Nissan Leaf being one of the most popular electric cars on the market. The company has a reputation for producing high-quality, reliable vehicles that are both affordable and efficient, with a focus on safety and technology."
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