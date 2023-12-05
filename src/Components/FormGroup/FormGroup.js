import './FormGroup.css'

const FormGroup = (props) => {
  return (
    <div className="formGroup">
      {props.children}
    </div>
  )
}


const LabelInputs = (props) => {
  return (
    <>
          <div className="labelinputs">
              <label htmlFor="PickUp">{props.label}</label><br />
              <input type="text" className='pickup' name='PickUp' placeholder={props.placeholder} />
          </div>
    </>
  )
}


const FormButton = (props) => {
  return (
    <>
      <button className='FormBtn'>{props.children}</button>
    </>
  );
}




export {LabelInputs , FormButton};
export default FormGroup;