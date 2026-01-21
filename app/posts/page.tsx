import Link from 'next/link'
import React from 'react'

// export default function page() {
//   return (
//     <div>
//         <h1 className='text-2xl'>Post Page</h1>
//     </div>
//   )
// }

// app/page.js (The Master Page)

import Post from '@/models/Post';
import dbConnect from '@/lib/db';

export default async function MasterPage() {
  await dbConnect();
  
  // Fetch all posts, sorted by newest first
  // .lean() converts Mongoose documents to plain JS objects (important for Next.js)
  const posts = await Post.find({}).sort({ createdAt: -1 }).lean();

  return (
    <main className="max-w-6xl mx-auto p-6">
        <Link href={"/posts/addPost"}>Add Post</Link>
      <h1 className="text-3xl font-bold mb-8">Recent Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id.toString()} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={post.coverImage} alt={post.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <Link 
                href={`/posts/${post._id.toString()}`} 
                className="text-blue-600 font-medium hover:underline"
              >
                Read Post →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}