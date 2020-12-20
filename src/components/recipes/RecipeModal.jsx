import React from 'react'
import RecipeContext from '../../context/recipes/recipesContext';


export const RecipeModal = () => {
  const recipeContext = React.useContext(RecipeContext)

  const { recipe, clearRecipe } = recipeContext
  
  return recipe && (
  <div id="recipe-modal-1" className="modal" style={{display: recipe ? "block" : "none"}}>
    <div className="modal-content">
      <span className="close" onClick={() => clearRecipe()}>&times;</span>
      <div className="row my-row">
          <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-10 my-modal-header">
              Інформація про рецепт
          </div>
          <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-10 col-sm-10 col-md-10 col-lg-10">
              <div className="modal-subtitle">
                  <span>Дата виписки: 20.10.2020</span>
              </div>

              <div className="technical-info">
                  Пацієнт
              </div>
              <div className="specific-info">
                  {recipe.patientName}
              </div>

              <div className="technical-info">
                  Вік
              </div>
              <div className="specific-info">
                  {recipe.patientAge}
              </div>

              <div className="technical-info">
                  Мобільний номер
              </div>
              <div className="specific-info">
                  {"+" + recipe.patientPhone}
              </div>

              <div className="technical-info">
                  Номер медичної карти
              </div>
              <div className="specific-info">
                  {recipe.patientMedcardNumber}
              </div>

              <div className="technical-info">
                  Назва лікарського засобу
              </div>
              <div className="specific-info">
                  {recipe.drugName}
              </div>

              <div className="technical-info">
                  Кількість лікарського засобу
              </div>
              <div className="specific-info">
              {recipe.doze}
              </div>

              <div className="technical-info">
                  Застосування
              </div>
              <div className="specific-info footer">
                  {recipe.recommendation}
              </div>
          </div>
          
      </div>

    </div>

  </div>
  )
}
