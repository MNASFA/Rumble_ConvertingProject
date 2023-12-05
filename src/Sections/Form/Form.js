import './Form.css'
import {FormButton, FormGroup , LabelInputs} from '../../Components/index';
import Container from 'react-bootstrap/Container';


const Form = () => {
  return (
    <>
        <form action="" className='Form-Container'>
          <Container className='FormContainer'>
              <FormGroup className='Formgroup'>
                <LabelInputs placeholder='City , distirct or specific airpot' label='Pick Up'/>
              </FormGroup>

              <FormGroup className='Formgroup'>
                <LabelInputs placeholder='City , distirct or specific airpot' label='Drop Off'/>
              </FormGroup>

              <FormGroup className='Formgroup'>
                <label htmlFor="Adults" className='labels'>Adults</label>
                <br/>
                <select name="Adults" id="Adults">
                  <option value="01">01</option>
                  <option value="02">02</option>
                </select>
              </FormGroup>

              <FormGroup className='Formgroup'>
                <label htmlFor="Kids"  className='labels'>Kids</label><br/>
                <select name="Kids" id="Kids">
                  <option value="01">01</option>
                  <option value="02">02</option>
                </select>
              </FormGroup>

              <FormGroup className='Formgroup'>
              <LabelInputs placeholder='Type here' label='Promocode'/>
              </FormGroup>

              <FormGroup className='Formgroup'>
                <label htmlFor="PickUpdate"  className='labels'>Pick Up Date/Time</label><br/>
                <div className="contain">
                    <input type="date" className='PickUpdate inputsdate' name='PickUpdate' />
                    <select name="PickupdateMore" id="PickupdateMore">
                      <option value="Anytime">Anytime</option>
                      <option value="Morning">Morning</option>
                      <option value="Night">Night</option>
                    </select>
                </div>
              </FormGroup>

              <FormGroup className='Formgroup'>
                <label htmlFor="DropUpdate"  className='labels'>Drop Up Date/Time</label><br/>
                <div className="contain">
                    <input type="date" className='DropUpdate inputsdate' name='DropUpdate' />
                    <select name="DropupdateMore" id="DropupdateMore">
                      <option value="Anytime">Anytime</option>
                      <option value="Morning">Morning</option>
                      <option value="Night">Night</option>
                    </select>
                </div>
              </FormGroup>

              <FormGroup className='Formgroup'>
                <label htmlFor="CarType"  className='labels'>Car Type</label><br/>
                <select name="CarType" id="CarType">
                  <option value="Economy">Economy</option>
                  <option value="Compact">Compact</option>
                </select>
              </FormGroup>
              
            <FormGroup>
                <br />
                <FormButton>
                  Search
                </FormButton>
            </FormGroup>

          </Container>
        </form>
    </>
  )
}

export default Form