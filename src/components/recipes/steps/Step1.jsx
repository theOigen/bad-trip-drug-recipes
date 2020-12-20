import React from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../../context/auth/authContext';


export const Step1 = ({ handleContinue }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("380")
  const authContext = React.useContext(AuthContext);
  const { fetchPatientByNumber } = authContext

  const handleNextStep = () => {
    fetchPatientByNumber(phoneNumber)
    handleContinue()
  }


  return (
    <div className="welcome-row row" id="step">
          <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
          <div className="col-10 col-sm-10 col-md-8 col-lg-8">
            <section className="recipe-card border p-4 mb-4 ">

              <div className="d-flex justify-content-center flex-wrap">
              
                <br />
                  <div className="my-card-header flex-row ">Формування рецепту</div> 
                  <ul className="stepper stepper-horizontal flex-row" data-mdb-stepper="stepper">
                    <li className="stepper-step stepper-active">
                      <div className="stepper-head" tabIndex="0">
                        <span className="stepper-head-icon"> 1 </span>
                        <span className="stepper-head-text stepper-head-text-active"> Номер пацієнта </span>
                      </div>

                    </li>
                    <li className="stepper-step ">
                      <div className="stepper-head">
                        <span className="stepper-head-icon"> 2 </span>
                        <span className="stepper-head-text"> Інформація про пацієнта </span>
                      </div>
                    </li>
                    <li className="stepper-step">
                      <div className="stepper-head">
                        <span className="stepper-head-icon"> 3 </span>
                        <span className="stepper-head-text"> Вибір препаратів </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                  <div className="stepper-content py-3 first-step-content d-flex flex-row justify-content-start">
                    <div className="recipe-label d-flex flex-row" >Мобільний номер</div> 
                  </div>
                  <div className="line-break"></div>

                  <div className="stepper-content py-3 first-step-content d-flex flex-row justify-content-left">
                    <input type="text" name="text" className="form-control my-form-control patient-phone-number  d-flex flex-row" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                  <div className="line-break"></div>
                </div>

                <div className="d-flex justify-content-end flex-wrap recipe-step1-buttons">
                  <div className="stepper-content py-3 first-step-content d-flex flex-row justify-content-end">
              <div className="buttons-row">
                <Link to="/">
                  
                        <button type="button" name="cancel" className="btn my-btn-secondary">Скасувати</button>
                </Link>
                      <button type="button" name="continue" className="btn btn-primary" onClick={handleNextStep}>Продовжити</button>
                    </div>
                  </div>
                </div>


            </section>
            
          </div>
        </div>
  )
}
