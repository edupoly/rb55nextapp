import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-200 flex gap-5 p-5'>
        <h1>Public Logo</h1>
        <Link href="/aboutus">Aboutus</Link>
        <Link href="/contactus">Contactus</Link>
        <Link href="/login">Login/Signup</Link>
    </div>
  )
}

export default Navbar