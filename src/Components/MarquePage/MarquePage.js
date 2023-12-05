import './MarquePage.css'
import { Container } from 'react-bootstrap'

const MarquePage = (props) => {
  return (
    <>
      <Container>
          <div className="MarquePageTitle">
          <h2 className="contactTitle fw-bold mb-3 text-center text-uppercase ">{props.title}</h2>
          </div>

          <div className="ServicesDescription">
                      <div className="left">
                          <h2>About <span>{props.Span}</span>{props.DescriptionTitle}</h2>
                          <br />
                          <p>{props.DescriptionPara}</p>
                      </div>
                      <div className="right ImageRight">
                            <img src={props.img} alt="Marque_Image" />
                      </div>
          </div>

          <div className="ModelTitle">
            <strong>Modèles</strong>
          </div>
      </Container>
    </>
  )
}

export default MarquePage