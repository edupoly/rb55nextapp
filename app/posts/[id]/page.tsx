import React from 'react'
import PostDetails from './PostDetails';

async function page({params}) {
    const {id} = await params;
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    const data = await res.json();
  return (
    <div>
        <PostDetails post={data}></PostDetails>
    </div>
  )
}

export default page