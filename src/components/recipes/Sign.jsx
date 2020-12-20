import React from 'react'
import { useHistory } from "react-router-dom";
import logo from '../../img/logo.png'
import AuthContext from '../../context/auth/authContext';
import RecipeContext from '../../context/recipes/recipesContext'

export const Sign = (props) => {
  const recipeContext = React.useContext(RecipeContext)
  const authContext = React.useContext(AuthContext);
  const { logout, user } = authContext

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  const { createRecipe } = recipeContext
  
  const history = useHistory()

  const handleFinish = () => {
    createRecipe(props.location.state)
    history.push('/')
  }

  return (
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
      <div className="welcome-row row">
            <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
            <div className="col-10 col-sm-10 col-md-8 col-lg-8">
              <section className="recipe-card border p-4 mb-4 ">
  
                <div className="d-flex justify-content-center flex-wrap">
                
                  <br/ >
                    <div className="my-card-header flex-row ">Підписання документу</div>
                  </div>
  
                  <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                    <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                      <div className="recipe-label d-flex flex-row" >Кваліфікований надавач електронних послуг</div> 
                    </div>
                    <div className="line-break"></div>
  
                    <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
                      <select className="form-control medcine-pagination-select">
                          <option>Визначити автоматично</option>
                      </select>
                    </div>
                    <div className="line-break"></div>
                  </div>
  
                  <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                    <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                      <div className="recipe-label d-flex flex-row" >Особистий ключ</div> 
                    </div>
                    <div className="line-break"></div>
  
                    <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
                      
                      <input type="file" name="text" className="form-control my-form-control recipe-key  d-flex flex-row" placeholder="Особистий ключ (Key-6.dat, *.pfx, *.p..." aria-describedby="basic-addon2" />
                    </div>
                    <div className="line-break"></div>
                  </div>
  
                  <div className="d-flex justify-content-start flex-wrap recipe-step1-user-number">
                    <div className="stepper-content pt-3 first-step-content d-flex flex-row justify-content-start">
                      <div className="recipe-label d-flex flex-row">Пароль захисту ключа</div> 
                    </div>
                    <div className="line-break"></div>
  
                    <div className="stepper-content py-1 first-step-content d-flex flex-row justify-content-left">
                      <input type="password" name="text" className="form-control my-form-control recipe-password  d-flex flex-row" placeholder="Введіть пароль захисту ключа" aria-describedby="basic-addon2" />
                    </div>
                    <div className="line-break"></div>
                  </div>
  
                  <div className="d-flex justify-content-end flex-wrap recipe-step1-buttons">
                    <div className="stepper-content py-3 first-step-content d-flex flex-row justify-content-end">
                      <div className="buttons-row">
                        <button type="button" name="cancel" className="btn my-btn-secondary">Скасувати</button>
                        <button type="button" name="continue" className="btn btn-primary" onClick={handleFinish}>Підписати</button>
                      </div>
                    </div>
                  </div>
  
  
              </section>
              
            </div>
          </div>
    </div>
  )
}
