import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-200 flex gap-5 p-5'>
        <h1>Login Logo</h1>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
    </div>
  )
}

export default Navbar