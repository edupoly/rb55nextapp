import React from 'react'
import Users from './Users';
async function getUsers(){
    const res = await fetch("https://dummyjson.com/users")
    const data = await res.json()
    return data
}

async function AllUsers() {
    const data = await getUsers()
  return (
    <div>
        <h1 className="text-5xl">
            AllUsers
        </h1>
        <Users users={data.users}></Users>
    </div>
  )
}

export default AllUsers