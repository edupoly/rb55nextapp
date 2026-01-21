// app/post/[id]/page.js

import Post from '@/models/Post';
import { notFound } from 'next/navigation';
// Import a Client Component that handles the Lexical rendering
import LexicalView from '@/app/components/LexicalView'
import dbConnect from '@/lib/db';

async function page({ params }) {
  const { id } = await params;
  await dbConnect();

  const post = await Post.findById(id).lean();

  if (!post) {
    notFound(); // Triggers the 404 page if ID doesn't exist
  }

  return (
    <article className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold mb-4">{post.title}</h1>
        <img src={post.coverImage} className="w-full rounded-2xl shadow-lg" />
      </header>
      
      {/* We pass the JSON string content to the Client Component 
         because Lexical must run in the browser.
      */}
      <LexicalView initialContent={post.content} />
    </article>
  );
}
export default page;