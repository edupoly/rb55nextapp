import React from 'react'
import Products from './Products'
async function getAllProducts(){
  const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
return data
}
async function page() {
    const data = await getAllProducts()
  return (
    <div>
        <h1 className="text-4xl">Products</h1>
        <Products products={data.products}></Products>
    </div>
  )
}

export default page