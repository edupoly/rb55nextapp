import React from 'react'
import AllTodos from './AllTodos'
import { getUserTodos } from '@/actions/todoActions'

async function page() {
    const userTodos = JSON.parse(await getUserTodos())
    console.log("todos page lo userTodos",userTodos);
  return (
    <div  className='border p-2 m-2'>
        <div>todos page</div>
        <AllTodos userTodos={userTodos} editTodo={false}></AllTodos>
    </div>

  )
}

export default page