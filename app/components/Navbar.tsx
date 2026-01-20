import Link from 'next/link'

import { getUserDetails } from '@/actions/auth-actions';

async function Navbar() {
  const user = await getUserDetails()
  console.log(user);
  return (

         <div className="flex gap-5 bg-gray-300 p-5">
            <Link href="/">Home</Link>
            <Link href="/aboutus">Aboutus</Link>
            <Link href="/contactus">Contactus</Link>
            <Link href="/products">Products</Link>
            <Link href="/todos">Todos</Link> 
            {/* <Link href="/recipes">Recipes</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/users">Users</Link>*/}
            
        </div>
  )
}

export default Navbar