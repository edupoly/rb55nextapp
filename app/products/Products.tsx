
import Link from 'next/link'
import React from 'react'

function Products({products}) {
    
  return (
    <div>
        <h2>Products</h2>
        <ul>
            {products.map((product)=>{
                return <li key={product.id}>
                    <Link href={`/products/${product.id}`}>{product.title}</Link>
                </li>
            })}
        </ul>
    </div>  
  )
}

export default Products