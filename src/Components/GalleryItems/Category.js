
const Category = (props) => {
  return (
    <>
        <div className="column">
           <img src={props.picture} alt="" className="CarImage" />
           <div className="content">
             <p>{props.paragraphe}</p>
             <h5>{props.title}</h5>
           </div>
        </div>
    </>
  )
}

export default Category