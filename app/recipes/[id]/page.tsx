import React from 'react'

async function page({params}) {
    const {id} = await params;
    console.log(id);
  return (
    <div>
        <h1 className="text-3xl">{id} Recipe</h1>
    </div>
  )
}

export default page