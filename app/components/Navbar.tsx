import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (

         <div className="flex gap-5 bg-gray-300 p-5">
            <Link href="/">Home</Link>
            <Link href="/aboutus">Aboutus</Link>
            <Link href="/contactus">Contactus</Link>
            <Link href="/products">Products</Link>
            <Link href="/recipes">recipes</Link>
        </div>
  )
}

export default Navbar