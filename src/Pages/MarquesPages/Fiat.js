import { MarquePage } from "../../Components"
import image from "../../Components/assets/img/LogoOfCars/Fiat-logo-2006-1920x1080.png"
import VoitureMarque from "../../Components/VoitureMarqueCard/VoitureMarque"
import { FiatCars } from '../../Data/MostReplayed'
import {Row } from 'react-grid-system';
import { Container } from "react-bootstrap";

const Fiat = () => {

  const Columns = FiatCars.map(column => {
    return <VoitureMarque Key={column.id} image={column.image} Text={column.Text} title={column.title} Phone = {column.Phone}/>
  })

  return (
    <>
      <MarquePage
      
      title = "FIAT"
      Span = "F"
      DescriptionTitle = "iat" 
      DescriptionPara = "Fiat is an Italian car manufacturer that produces a range of cars, including small city cars, hatchbacks, sedans, SUVs, and commercial vehicles. The company was founded in 1899 and has its headquarters in Turin, Italy. The name Fiat stands for Fabbrica Italiana Automobili Torino, which translates to Italian Automobile Factory of Turin in English. Fiat has a long history of producing innovative and stylish cars that are known for their performance, reliability, and affordability. Some of Fiat's most popular models over the years include the Fiat 500, the Fiat Panda, and the Fiat Punto. In recent years, Fiat has also expanded into electric and hybrid vehicles as part of its commitment to sustainability and reducing emissions."
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

export default Fiat