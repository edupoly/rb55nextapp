import React from 'react'
import AllTodos from './AllTodos'
import { getMyTodos } from '@/actions/todoActions'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

async function page() {
  const session = await auth()
    if(!session){
        redirect("/login")
    }
    const allTodos = JSON.parse(await getMyTodos(session.emailId))
  return (
    <div  className='border p-2 m-2'>
        <div>todos page</div>
        <AllTodos allTodos={allTodos} editTodo={false}></AllTodos>
    </div>

  )
}

export default page