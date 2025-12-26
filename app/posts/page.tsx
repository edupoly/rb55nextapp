import React from 'react'
import Posts from './Posts';

async function page() {
    const res = await fetch("https://dummyjson.com/posts")
    const data = await res.json();
  return (
    <div>
        <div>page</div>
        <Posts posts={data.posts}></Posts>
    </div>
  )
}

export default page