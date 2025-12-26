import React from 'react'
import RecipesHome from './RecipesHome';


async function RecipesPage() {
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json();

  return (
    <div>
        <h1 className="text-4xl">Products</h1>
        <RecipesHome recipes={data.recipes}></RecipesHome>
    </div>
  )
}

export default RecipesPage;