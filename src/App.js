import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Header , Footer} from './Sections/index'
import {ContainerAPP} from './Components/index'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import { Home , AboutUs , Services , Blog , Contact , Register , Marques ,
          Dacia ,
          Fiat ,  
          Ford   ,
          Renault,
          Skoda  ,
          Mercides,
          Citroen,
          Tesla  ,
          Toyota ,
          Volvo,
          Bmw,
          Nissan ,
          Blog01
} from './Pages/index';


const App = () => {
  return (
      <>
        <Router>
          
          <Header/>
            <ContainerAPP>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/AboutUs' element={<AboutUs/>}/>
                  <Route path='/Services' element={<Services/>}/>
                  <Route path='/Blog' element={<Blog/>}/>
                  <Route path='/Contact' element={<Contact/>}/>
                  <Route path='/Register' element={<Register/>}/>
                  <Route path='/Marques' element={<Marques/>}/>
                  <Route path='/Dacia' element={<Dacia/>}/>
                  <Route path='/Fiat' element={<Fiat/>}/>
                  <Route path='/Citroen' element={<Citroen/>}/>
                  <Route path='/Toyota' element={<Toyota/>}/>
                  <Route path='/Volvo' element={<Volvo/>}/>
                  <Route path='/Skoda' element={<Skoda/>}/>
                  <Route path='/Ford' element={<Ford/>}/>
                  <Route path='/Renault' element={<Renault/>}/>
                  <Route path='/Tesla' element={<Tesla/>}/>
                  <Route path='/Mercides' element={<Mercides/>}/>
                  <Route path='/Bmw' element={<Bmw/>}/>
                  <Route path='/Nissan' element={<Nissan/>}/>
                  <Route path='/Blog01' element={<Blog01/>}/>
                </Routes>
            </ContainerAPP>
          <Footer/>
      
        </Router>
      </>
  )
}

export default App
