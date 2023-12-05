import './Blog.css'
import { Container } from 'react-bootstrap'
import { TopSectionPages, TitleandPara } from '../../Components/index'
import { BlogCard } from '../../Components/index'
import {Row } from 'react-grid-system';
import { MostPopularBlog } from '../../Data/MostReplayed'
import Slider from "react-slick"

import image from '../../Components/assets/img/Blog post-pana.svg'

const Blog = () => {

  const Columns = MostPopularBlog.map(column => {
    return <BlogCard Key={column.id} image={column.image} Text={column.Text} title={column.title} btn = {column.btn}/>
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
          <TopSectionPages>BLOG</TopSectionPages>
          <Container>
            <div className="ServicesDescription">
                    <div className="left">
                        <h1><span>R</span>UMBLE BLOG</h1>
                        <br />
                        <p>

                        Welcome to our car website's blog page! Here, we provide you with the latest updates, tips,
                        
                        and advice on all things related to cars. From car maintenance and safety to car buying and selling, 
                        
                        we've got you covered.

                        <br />

                        Whether you're a car enthusiast or simply looking for information to help you make informed decisions, 
                        
                        we've got something for everyone. Our team of experts is constantly researching and testing the latest cars,
                        
                        technologies, and trends to bring you the most up-to-date information.

                        </p>
                    </div>
                    <div className="right">
                          <img src={image} alt="Description_image" />
                    </div>
            </div>

           <div className="BlogGird">
              <TitleandPara 
                          className = "topofsection"
                          left="OUR"
                          right="BLOG"
                          paragraphe=""
                      />
              <Slider {...settings}>
                  <div>
                      <Row>
                        {Columns}
                      </Row>
                  </div>
                  <div>
                        <Row>
                          {Columns}
                        </Row>
                  </div>
                </Slider>
           </div>

          </Container>
    </>
  )
}

export default Blog