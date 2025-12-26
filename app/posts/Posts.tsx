import Link from 'next/link'
import React from 'react'

function Posts({posts}) {

  return (
    <div>
        <ul>
            {
                posts.map((post)=>{
                    return <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Posts