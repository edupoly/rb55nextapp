import React from 'react'
async function page({params}) {
    const {id} = await params;
    const res = await fetch(`https://dummyjson.com/users/${id}`)
    const data = await res.json()
    console.log(data);
  return (
    <div>
        <h1 className="text-5xl text-red-500"></h1>
        <img src={`${data.image}`} alt="" />
    </div>
  )
}

export default page