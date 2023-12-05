import './Marques.css'
import { Container } from 'react-bootstrap'
import { TopSectionPages , MarquesItem } from '../../Components/index'
import image from '../../Components/assets/img/Car finance-rafiki.svg'
import { MostPopularMarques } from '../../Data/MostReplayed'
const Marques = () => {

  const Columns = MostPopularMarques.map(column => {
    return <MarquesItem Key={column.id} img={column.img} page ={column.page} title={column.title}/>
  })


  return (
    <>
        <TopSectionPages>Voiture</TopSectionPages>
        <Container>
            <div className="ServicesDescription">
                      <div className="left">
                          <h1><span>R</span>UMBLE MARQUES</h1>
                          <br />
                          <p>

                          Bienvenue sur notre site web de voitures ! Nous sommes passionnés par les véhicules et nous voulons 
                          partager notre enthousiasme avec vous.

                          <br />

                          Que vous cherchiez une voiture neuve ou d'occasion, nous avons une large sélection de modèles à vous offrir. 

                          Nous travaillons avec les meilleurs fabricants pour vous proposer des véhicules fiables et de qualité.

                          Nous avons également des 


                          options de financement disponibles pour vous aider à réaliser votre rêve d'avoir votre propre voiture.

                          </p>
                      </div>
                      <div className="right">
                            <img src={image} alt="Description_image" />
                      </div>
            </div>
            <section className="MarquesSection">
                <div className="MarquesTitle">
                  <strong>TOUTES LES MARQUES</strong>
                </div>  
                <div className="MarquesGrid">
                  {Columns}
                </div>
            </section>
        </Container>
    </>
  )
}

export default Marques