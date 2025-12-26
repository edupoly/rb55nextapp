import React from 'react'
import RecipesPage from './RecipesPage'



function RecipesLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex'>
        <RecipesPage></RecipesPage>
        {children}
    </div>
  )
}

export default RecipesLayout