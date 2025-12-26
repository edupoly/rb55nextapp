import React from 'react'
import Todolist from './Todolist';
async function getAllTodos(){
    const res = await fetch("http://localhost:4500/api/todos")
    const data = await res.json()
    return data
}
export async function addNewTodo(){
   const res = await fetch("http://localhost:4500/api/todos",{
    method:"POST",
    body:JSON.stringify( {
    "title":"Purchase the land",
    "email":"gubbalapraveen@gmail.com"
})
   })
    const data = await res.json()
    return data
}
async function page() {
    const data = await getAllTodos();
  return (
    <div>
        <h1>Todolist page</h1>
        <Todolist todos={data}></Todolist>
    </div>
  )
}

export default page
