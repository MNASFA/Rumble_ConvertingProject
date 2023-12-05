import './Home.css'
import {Carousel ,Form, About , Category , Team, Partners,  Gallery ,Services} from '../../Sections/index'

const Home = () => {
  return (
    <>
      <Carousel/>
      <Form/>
      <About/>
      <Category/>
      <Gallery/> 
      <Services/>
      <Team/>
      <Partners/> 
    </>
  )
}

export default Home