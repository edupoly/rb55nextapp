import Link from 'next/link'
import React from 'react'

function RecipesHome({recipes}) {

  return (
    <div>
        <h1>RecipesHome</h1>
        <ul>
            {recipes.map((recipe)=>{
                return <li key={recipe.id}>
                    <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                </li>
            })}
        </ul>
    </div>
  )
}

export default RecipesHome