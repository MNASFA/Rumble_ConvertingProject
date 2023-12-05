import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/ford-logo-2017.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { FordCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";
const Ford = () => {


  const Columns = FordCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })


  return (
    <>
      <MarquePage
      
      title = "FORD"
      Span = "F"
      DescriptionTitle = "ord" 
      DescriptionPara = "Ford is a brand of automobiles, trucks, SUVs, and commercial vehicles produced by Ford Motor Company, a global American automaker founded by Henry Ford in 1903. Ford cars are known for their reliability, performance, and affordability. The company produces a range of models, including popular sedans like the Ford Focus and Ford Fusion, versatile SUVs like the Ford Explorer and Ford Escape, and powerful trucks like the Ford F-150 and Ford Super Duty. Ford has a long history of innovation in the automotive industry, and continues to introduce new technologies and features to improve the driving experience for its customers."
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

export default Ford