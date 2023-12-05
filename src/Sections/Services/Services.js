import './Services.css'
import { Container } from 'react-bootstrap'
import {TitleandPara , CardServices} from '../../Components/index'
import MostPopulartData from '../../Data/MostReplayed'

const Services = () => {

    const Cards = MostPopulartData.map(card => {
        return <CardServices Key={card.id} image={card.image} title={card.title} para={card.para} />
    })

    return (
        <>
            <Container>
                <div className="Services_Container">
                <TitleandPara 
                          left="Our"
                          right="Services"
                          paragraphe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quidem animi. Quo, ullam nesciunt, amet alias recusandae repellat eos voluptas sunt odio odit veritatis aut porro illum qui! Dignissimos, ipsa?"
                      />
                <div className="Cards">
                    {Cards}
                </div>
              </div>
            </Container>
        </>
    )
}

export default Services