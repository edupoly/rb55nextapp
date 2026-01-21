// app/admin/create-post/page.js
"use client";
import { createPostAction } from '@/actions/postActions';
import Editor from '@/app/components/Editor';
import { useState } from 'react';


export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // This will store the Lexical JSON

  const handleSave = async () => {
    console.log("Handle Save",content);
    // We use FormData to match the Server Action signature
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    const result = await createPostAction(formData);
    
    if (result.success) {
      alert("Post published successfully!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <input 
        className="text-4xl font-bold w-full mb-4 outline-none"
        placeholder="Post Title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      
      {/* PASSING THE FUNCTION HERE FIXES THE ERROR */}
      <Editor onChange={(jsonString) => setContent(jsonString)} />
      
      <button 
        onClick={handleSave}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Publish Post
      </button>
    </div>
  );
}