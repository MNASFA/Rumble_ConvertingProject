import './Gallery.css'
import Container from 'react-bootstrap/Container';
import {MostPopularGallery} from '../../Data/MostReplayed'
import {Navlinkgallery,TitleandPara,GalleryItem} from '../../Components/index';

const Gallery = () => {

  const Items = MostPopularGallery.map(item => {
    return <GalleryItem Key={item.id} link={item.link} image={item.image} />
})
  
  return (
    <>
      
          <Container>
              <div className="GalleryDiv">
              <TitleandPara 
                  left="Our"
                  right="Gallery"
                  paragraphe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quidem animi. Quo, ullam nesciunt, amet alias recusandae repellat eos voluptas sunt odio odit veritatis aut porro illum qui! Dignissimos, ipsa?"
              />
                <div className="Filter_Galerry">
                  <Navlinkgallery/>
                </div>
                <div className="GalleryGrid">
                  {Items}
                </div>
              </div>
          </Container>
  
    </>
  )
}

export default Gallery