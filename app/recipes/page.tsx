import Link from 'next/link'
import React from 'react'

async function page({params}) {
    const x = await params

  return (
    <div>
        <h1 className='text-2xl'>
            Recipes Details Page
        </h1>

    </div>
  )
}

export default page