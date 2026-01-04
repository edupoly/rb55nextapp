import { signOut } from '@/auth'
import Link from 'next/link'
import React from 'react'
import Singout from './Singout'
import { getUserDetails } from '@/actions/auth-actions'

async function Navbar() {
  const user = await getUserDetails();
  return (

         <div className="flex gap-5 bg-gray-300 p-5 align-items-center">
            <Link href="/">Home</Link>
            <Link href="/aboutus">Aboutus</Link>
            <Link href="/contactus">Contactus</Link>
            <Link href="/products">Products</Link>
            {
              user && (<>
                <Link href="/todos">Todos</Link> 
                <Singout></Singout>
              </>)
            }
            {
              !user && (<>
              <Link href="/login">Login</Link> 
              </>)
            }
            
            {/* <Link href="/recipes">Recipes</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/users">Users</Link>*/}
        </div>
  )
}

export default Navbar