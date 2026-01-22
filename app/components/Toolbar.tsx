// components/Toolbar.js
"use client";


import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { getCloudinarySignature } from "@/actions/cloudinary";
import { INSERT_IMAGE_COMMAND } from "@/plugin/ImagePlugin";
import { useRef } from "react";

export default function Toolbar() {
  const [editor] = useLexicalComposerContext();
const imageUploadRef = useRef(null);

  const formatHeading = (level) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(level));
      }
    });
  };

  const formatBulletList = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };
const handleImageUploadClick = () => {
    imageUploadRef.current.click(); // Programmatically click hidden file input
  };

  const handleImageChange = async (event) => {
    const files = event.target.files;
    if (files.length === 0) return;

    const file = files[0];

    try {
      // 1. Get signed signature from your server
      const { signature, timestamp, cloudName, apiKey } = await getCloudinarySignature();

      // 2. Prepare FormData for Cloudinary direct upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('api_key', apiKey);
      formData.append('timestamp', timestamp);
      formData.append('signature', signature);
      formData.append('upload_preset', 'your_upload_preset'); // REMEMBER to change this!

      // 3. Upload to Cloudinary
      const cloudinaryResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await cloudinaryResponse.json();
      if (data.secure_url) {
        editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
          src: data.secure_url,
          altText: file.name,
          width: data.width, // Cloudinary provides width/height
          height: data.height,
        });
      } else {
        console.error("Cloudinary upload failed:", data);
        alert("Image upload failed!");
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      alert("Error uploading image. Check console.");
    }
  };
  return (
    <div className="flex items-center gap-2 p-2 mb-2 border-b bg-gray-50 rounded-t-lg">
      {/* Text Formatting */}
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        className="px-3 py-1 hover:bg-gray-200 rounded font-bold"
      >
        B
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        className="px-3 py-1 hover:bg-gray-200 rounded italic"
      >
        I
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      {/* Block Formatting */}
      <button
        onClick={() => formatHeading("h1")}
        className="px-3 py-1 hover:bg-gray-200 rounded"
      >
        H1
      </button>
      <button
        onClick={() => formatHeading("h2")}
        className="px-3 py-1 hover:bg-gray-200 rounded"
      >
        H2
      </button>
      <button
        onClick={formatBulletList}
        className="px-3 py-1 hover:bg-gray-200 rounded"
      >
        • List
      </button>
      {/* Image Upload Button */}
      <button
        onClick={handleImageUploadClick}
        className="px-3 py-1 hover:bg-gray-200 rounded"
      >
        🖼️ Image
      </button>
      {/* Hidden file input */}
      <input
        type="file"
        ref={imageUploadRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}