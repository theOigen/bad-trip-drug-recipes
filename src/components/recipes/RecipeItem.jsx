import React from 'react'
import RecipeContext from '../../context/recipes/recipesContext'
import trash from '../../img/trash.svg'

export const RecipeItem = ({recipe, deleteRecipe, openRecipeModal}) => {
  const { patientName, patientMedcardNumber, drugName } = recipe
  const {getRecipeById} = React.useContext(RecipeContext)

  const handleDelete = (e) => {
    e.preventDefault();
    deleteRecipe(recipe.id)
  }
  return (
    <tr onClick={() => getRecipeById(recipe.id)}>
      <td>{ patientName }</td>
                      <td>{patientMedcardNumber}</td>
      <td>{drugName }</td>
                      <td>19.12.2020</td>
                      <td>
                        <a href="#" onClick={handleDelete}>
                          <img src={trash} alt="" />
                        </a>
                      </td>
                  </tr>
  )
}
