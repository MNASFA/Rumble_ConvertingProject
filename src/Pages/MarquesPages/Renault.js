import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/Renault-logo-2015-2048x2048.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { RenaultCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";
const Renault = () => {

    const Columns = RenaultCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })

  return (
    <>
      <MarquePage
      
      title = "Renault"
      Span = "R"
      DescriptionTitle = "enault" 
      DescriptionPara = "Renault is a French automobile manufacturer that produces a range of cars and vans. The company was founded in 1899 and is one of the oldest automobile manufacturers in the world. Renault has a reputation for producing cars that are reliable, efficient, and stylish. Renault cars are known for their European styling and innovative technology. Some popular models produced by Renault include the Clio, Megane, Kadjar, and Captur. Renault also produces electric vehicles, such as the Zoe, which is one of the most popular electric cars in Europe."
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

export default Renault