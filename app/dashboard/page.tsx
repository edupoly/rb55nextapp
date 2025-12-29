
import { auth } from '@/auth';

import { redirect } from 'next/navigation';
import { handleLogout } from "@/actions/auth-actions";

export default async function page() {
    const session = await auth()
    if(!session){
        redirect("/login")
    }
  return (
    <div>
        <h1>Dash board Page</h1>
        <form action={handleLogout}>
            <button className='button border p-2 m-2 bg-red-400' type="submit">Logout</button>
        </form>
    </div>
  )
}

