import React from 'react'
import AuthContext from '../../../context/auth/authContext';


export const Step2 = ({ handleContinue }) => {
  const authContext = React.useContext(AuthContext);
  const { patient } = authContext

  const [fullname, setFullname] = React.useState('d_d_efault')
  const [cardNumber, setCardNumber] = React.useState('d_d_efault')
  const [age, setAge] = React.useState(-1)

  return patient && (
    <>
        <div className="welcome-row row" id="step">
          <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
          <div className="col-10 col-sm-10 col-md-8 col-lg-8">
            <section className="recipe-card border p-4 mb-4 ">

              <div className="d-flex justify-content-center flex-wrap">
              
                <br />
                  <div className="my-card-header flex-row ">Формування рецепту</div> 
                  <ul className="stepper stepper-horizontal flex-row" data-mdb-stepper="stepper">
                    <li className="stepper-step">
                      <div className="stepper-head  stepper-active" tabIndex="0">
                        <span className="stepper-head-icon"> 1 </span>
                        <span className="stepper-head-text stepper-head-text-active"> Номер пацієнта </span>
                      </div>
                    </li>
                    <li className="stepper-step">
                      <div className="stepper-head  stepper-active">
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
                  <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                    <div className="recipe-label d-flex flex-row" >ПІБ</div> 
                  </div>
                  <div className="line-break"></div>

                  <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
                <input type="text" name="text" className="my-form-control form-control patient-initials  d-flex flex-row" placeholder="Прізвище Ім'я По-батькові" aria-describedby="basic-addon2"
                  value={fullname === 'd_d_efault' ? patient.fullname : fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                  </div>
                  <div className="line-break"></div>
                </div>

                <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                  <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                    <div className="recipe-label d-flex flex-row" >Номер медичної карти</div> 
                  </div>
                  <div className="line-break"></div>

                  <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
                <input type="text" name="text" className="my-form-control form-control patient-med-card  d-flex flex-row" placeholder="ААА1234567" aria-describedby="basic-addon2"
                  value={cardNumber === 'd_d_efault' ? patient.cardNumber : cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                  </div>
                  <div className="line-break"></div>
                </div>

                <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                  <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                    <div className="recipe-label d-flex flex-row">Вік</div> 
                  </div>
                  <div className="line-break"></div>

                  <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
                <input type="text" name="text" className="my-form-control form-control patient-age  d-flex flex-row" placeholder="37" aria-describedby="basic-addon2"
                  value={age < 0 ? patient.age : age}
                  onChange={(e) => setAge(e.target.value)}
                />
                  </div>
                  <div className="line-break"></div>
                </div>

                <div className="d-flex justify-content-end flex-wrap recipe-step1-buttons">
                  <div className="stepper-content py-3 first-step-content d-flex flex-row justify-content-end">
                    <div className="buttons-row">
                      <button type="button" name="cancel" className="btn my-btn-secondary">Скасувати</button>
                      <button type="button" name="continue" className="btn btn-primary" onClick={handleContinue}>Сформувати</button>
                    </div>
                  </div>
                </div>

            </section>
            
          </div>
        </div>
    </>
  )
}
