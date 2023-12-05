import './TitleandPara.css'

const TitleandPara = (props) => {
  return (
    <>
        <div className="description-top">
                <strong>{props.left}<span> {props.right}</span></strong>
                <br /><br /><br />
                <p>{props.paragraphe}</p>
        </div>    
    </>
  )
}

export default TitleandPara