
import React from 'react'
async function getProductDetails(id:number){
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return data
}
async function ProductDetails({params}:{params:Promise<{slug:number}>}) {
  const {slug} = await params
  const product = await getProductDetails(slug)
  return (
    <div>
        <h1 className='text-4xl'>ProductDetails</h1>
        <img src={product.thumbnail} alt="" />
    </div>
  )
}

export default ProductDetails