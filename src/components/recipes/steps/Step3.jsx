import React from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../../context/auth/authContext';

export const Step3 = () => { 
  const authContext = React.useContext(AuthContext);

  const { patient, user } = authContext
  const [drugName, setDrugName] = React.useState('')
  const [doze, setDoze] = React.useState('')
  const [recommendation, setRecommendation] = React.useState('')
  if (!patient) return <></>
  return (
    <div className="welcome-row row" id="step3">
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
                      <div className="stepper-head stepper-active">
                        <span className="stepper-head-icon"> 3 </span>
                        <span className="stepper-head-text"> Вибір препаратів </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                  <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                    <div className="recipe-label d-flex flex-row" >Назва лікарського засобу</div> 
                  </div>
                  <div className="line-break"></div>

                  <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
              <select className="form-control medcine-pagination-select" onChange={e => {
                const selectedValue = e.target.options[e.target.options.selectedIndex].innerText
setDrugName(selectedValue)
                    }}>
                        <option>Бісопорол</option>
                        <option>Інсулін</option>
                        <option>Пертусин</option>
                        <option>Доктор МОМ</option>
                    </select>
                  </div>
                  <div className="line-break"></div>
                </div>

                <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                  <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                    <div className="recipe-label d-flex flex-row" >Кількість лікарського засобу</div> 
                  </div>
                  <div className="line-break"></div>

                  <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
              <input type="text" name="text" className="form-control my-form-control medcine-quantity  d-flex flex-row" placeholder="n таблеток" aria-describedby="basic-addon2"
                value={doze} onChange={e => setDoze(e.target.value)}
              />
                  </div>
                  <div className="line-break"></div>
                </div>

                <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                  <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                    <div className="recipe-label d-flex flex-row">Застосування</div> 
                  </div>
                  <div className="line-break"></div>

                  <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
              <input type="text" name="text" className="form-control my-form-control medcine-usage d-flex flex-row" placeholder="" aria-describedby="basic-addon2"
              value={recommendation} onChange={e => setRecommendation(e.target.value)}
              />
                  </div>
                  <div className="line-break"></div>
                </div>
                <div className="d-flex justify-content-center flex-wrap recipe-step1-buttons">
                  <div className="stepper-content py-3 first-step-content d-flex flex-row justify-content-end">
                    <div className="buttons-row">
                      <button type="button" name="cancel" className="btn my-btn-secondary">Додати препарат</button>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end flex-wrap recipe-step1-buttons">
                  <div className="stepper-content py-3 first-step-content d-flex flex-row justify-content-end">
                    <div className="buttons-row">
                <Link to='/'><button type="button" name="cancel" className="btn my-btn-secondary">Скасувати</button></Link>
                <Link to={{
                  pathname: '/sign-page',
                  state: {
PatientPhone: patient.phone,
                  DoctorId: user.id,
                  DrugName: drugName,
                  Doze: Number(doze),
                  Recommendation: recommendation
                  }
                }}>
                  
                        <button type="button" name="continue" className="btn btn-primary">Сформувати</button>
                </Link>
                    </div>
                  </div>
                </div>


            </section>
            
          </div>
        </div>
  )
}
