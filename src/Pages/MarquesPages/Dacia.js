
import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/Dacia-logo.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { DaciaCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";

const Dacia = () => {

  const Columns = DaciaCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })

  return (
    <>
      <MarquePage
      
        title = "Dacia"
        Span = "D"
        DescriptionTitle = "acia" 
        DescriptionPara = "Dacia is a brand of cars manufactured by the Romanian carmaker, Automobile Dacia. It was founded in 1966 and was initially a state-owned company, but it was privatized in 1999 and is now a subsidiary of the French carmaker, Renault. Dacia cars are known for their affordability and simplicity, and they are popular in many countries, especially in Eastern Europe and the Middle East. The company's main focus is on producing budget-friendly cars that are reliable and easy to maintain."
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

export default Dacia