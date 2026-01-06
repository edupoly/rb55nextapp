import React from 'react'
import AllTodos from './AllTodos'
import { getAllTodos, getMyTodos } from '@/actions/todoActions'

async function page() {
    const allTodos = JSON.parse(await getMyTodos())
  return (
    <div  className='border p-2 m-2'>
        <div>todos page</div>
        <AllTodos allTodos={allTodos} editTodo={false}></AllTodos>
    </div>

  )
}

export default page