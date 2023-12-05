import './TopSectinPages.css';

const TopSectionPages = (props) => {
  return (
    <>
      <div className="topsection">
          <strong>{props.children}</strong>
      </div>
    </>
  )
}

export default TopSectionPages