
import { NavLink } from 'react-router-dom';

const MarquesItem = (props) => {
  return (
    <NavLink to={props.page} className="GlobalLink">
      <div className="MarquesItem">
        <div className="MarquesImg">
          <img src={props.img} alt="Voiture Marque" />
        </div>
        
        <div className="TitleMarques">
          <NavLink to={props.page} className="BottomLink"> {props.title}</NavLink>
        </div>
      </div>
    </NavLink>
  )
}

export default MarquesItem