import React, { useContext, useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import {RecipeItem } from './RecipeItem'
import RecipesContext from '../../context/recipes/recipesContext'
import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'

export const Recipes = ({openRecipeModal}) => {
  const recipesContext = useContext(RecipesContext)

  const { getRecipes, deleteRecipe, recipes, totalAmount } = recipesContext

  const [page, setPage] = useState(1)
  const [amountPerPage, setAmountPerPage] = useState(5)

  const handleSelectChange = (e) => {
    e.preventDefault()
    const selectedValue = Number(e.target.options[e.target.options.selectedIndex].innerText)
    setAmountPerPage(selectedValue)
    getRecipes(page, selectedValue)
  }

  const nextPage = (e) => {
    e.preventDefault()
    if (amountPerPage > totalAmount || (amountPerPage > recipes.length && amountPerPage >= totalAmount)) return
    const newPage = page + 1
    setPage(newPage)
    getRecipes(newPage, amountPerPage)
  }

  const prevPage = (e) => {
    e.preventDefault()
    if (page === 1) return
    const newPage = page - 1
    newPage >= 1
      ? setPage(newPage)
      : setPage(page)
    getRecipes(newPage, amountPerPage)
  }

  const calculatePaginated = React.useCallback(() => {    
    if (!recipes || !recipes.length) return    
    
    const amount = (amountPerPage > totalAmount ? totalAmount : amountPerPage)
    console.log("AMOUNT", amount)
    const calculatedRightBoundary = page * amount
    console.log("CALC RIGHT", calculatedRightBoundary)
    const rightBoundary = page === 1 ? recipes.length : calculatedRightBoundary > page * recipes.length && calculatedRightBoundary >= totalAmount ? totalAmount : calculatedRightBoundary
    console.log("RIGHT", rightBoundary)
    
    const calculatedLeftBoundary = rightBoundary - recipes.length + 1
    console.log("CALC LEFT", calculatedLeftBoundary)
    return calculatedLeftBoundary + '-' + rightBoundary
  }, [page, amountPerPage, totalAmount, recipes])

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line
  }, [])

  return recipes && (
    <div className="panel panel-primary second-panel">
            <div className="">
                        <div className="row my-row">
                            <div className="col-6 recipe-panel-header">Рецепти</div>
                            <div className="col-6 add-recipe my-auto">
                                <Link to="/create-recipe"><button type="button" name="continue" className="btn btn-primary">Виписати рецепт</button></Link>
                            </div>
                        </div>                        
                    </div>
            <div className="panel-body"></div>
              <div className="table-responsive">
                <table className="table table-hover" id="dev-table">
                  <thead>
                    <tr>
                      <th>Пацієнт</th>
                      <th>Номер мед.карти</th>
                      <th>Препарати</th>
                      <th>Дата виписки</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
            {recipes && recipes.map(recipe =>
              <RecipeItem openRecipeModal={openRecipeModal} recipe={recipe} key={recipe.id} deleteRecipe={deleteRecipe} />)}
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <div className="welcome-form-group">
          Рядків на сторінці
                <select className="welcome-form-control recipes-pagination-select" onChange={handleSelectChange}
          >
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span className="recipes-pages-quantity">
                  {calculatePaginated()} з {totalAmount}
                  </span>
                <a href="#" onClick={prevPage}>
                  <img src={arrowLeft} className="recipes-arrow-left" />
                </a>
                <a href="#" onClick={nextPage}>
                  <img src={arrowRight} className="recipes-arrow-right" />
                </a>
              </div>
            </div>
          </div>
  )
}
