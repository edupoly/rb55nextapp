import React from 'react'

function PostDetails({post}) {
    console.log(post);
  return (
    <div>
        <h1 className="text-4xl">
            {post.title}
        </h1>
        <p className='ms-15'>
            {post.body}
        </p>
    </div>
  )
}

export default PostDetails