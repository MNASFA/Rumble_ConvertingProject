
const GalleryItem = (props) => {
  return (
    <>
        <a href={props.link} className='Item'><img src={props.image} alt="" /></a>
    </>
  )
}



export default GalleryItem