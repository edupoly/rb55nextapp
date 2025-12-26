import Link from 'next/link'
import React from 'react'

function Users({users}) {

  return (
    <div>
        <ul>
            {
                users.map((user)=>{
                    return <li key={user.id}><Link href={`/users/${user.id}`}>{user.username}</Link></li>
                })
            }
        </ul>
    </div>
  )
}

export default Users