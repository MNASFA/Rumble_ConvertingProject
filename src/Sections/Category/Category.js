import './Category.css'
import Container from 'react-bootstrap/Container';
import {MostPopularCategory} from '../../Data/MostReplayed'
import {TitleandPara , CategoryItem} from '../../Components/index'

const Category = () => {

  const columns = MostPopularCategory.map(column => {
    return <CategoryItem Key={column.id} title={column.title} picture={column.picture} paragraphe={column.paragraphe} />
  })

  return (
    <>
      <div className="CategoryContainer">
        <Container>
        <TitleandPara 
                  left="Our"
                  right="Category"
                  paragraphe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quidem animi. Quo, ullam nesciunt, amet alias recusandae repellat eos voluptas sunt odio odit veritatis aut porro illum qui! Dignissimos, ipsa?"
              />
          <div className="GridConatiner">
            {columns}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Category