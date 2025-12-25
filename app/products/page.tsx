import React from 'react'
import Products from './Products'

async function page() {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();

  return (
    <div>
        <h1 className="text-4xl">Products</h1>
        <Products products={data.products}></Products>
    </div>
  )
}

export default page