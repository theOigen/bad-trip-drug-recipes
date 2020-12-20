import React from 'react'
import logo from '../../img/logo.png'
import AuthContext from '../../context/auth/authContext';
import {Step1 } from './steps/Step1'
import {Step2 } from './steps/Step2'
import {Step3 } from './steps/Step3'

export const CreateRecipe = () => {
  const [step, setStep] = React.useState(1);
  const authContext = React.useContext(AuthContext);

  const { logout, user } = authContext

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }
  
  // const handlePhoneNumber = () => {
  //   fetchPatientByNumber()
  //   const nextStep = step + 1
  //   setStep(nextStep)
  // }

  const handleNextStepClick = () => {
    const nextStep = step + 1
    setStep(nextStep)
  }

  return user && (
    <div>
      <div className="welcome-row row navbar-row">
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
        <div className="col-10 col-sm-10 col-md-8 col-lg-8 navbar navbar-expand-lg">
          <a href="/">
            <img src={logo} height="20" className="d-inline-block align-top" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="navbar-text navbar-button justify-content-right">
              <a
                className="navbar-link"
                href="#"
                onClick={handleLogout}
              >
                Вийти
              </a>
            </div>
          </div>
        </div>
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
      </div>
      {step === 1 && <Step1 handleContinue={handleNextStepClick} />}
      {step === 2 && <Step2 handleContinue={handleNextStepClick} />}
      {step === 3 && <Step3 handleFinish={handleNextStepClick} />}
    </div>
  )
}
