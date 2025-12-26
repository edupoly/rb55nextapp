import React from 'react'

function Todolist({todos}) {
    console.log(todos);
  return (
    <div>
        <ul>
            {
                todos.map((todos)=>{
                    return <li key={todos._id}>{todos.title}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist