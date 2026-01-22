// components/LexicalView.js
"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ImageNode } from "@/nodes/ImageNode";
// Define a theme to style the output using Tailwind
const theme = {
  heading: {
    h1: "text-4xl font-bold mt-8 mb-4",
    h2: "text-2xl font-semibold mt-6 mb-2",
  },
  list: {
    ul: "list-disc ml-6 mb-4",
    ol: "list-decimal ml-6 mb-4",
  },
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
  },
  paragraph: "text-lg leading-relaxed mb-4 text-gray-800",
};

export default function LexicalView({ initialContent }) {
  const config = {
    namespace: "PostReader",
    editable: false, // Disables editing
    theme,
    // Add nodes here if you used them in your editor
    nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode,ImageNode],
    editorState: initialContent, // The JSON string from your DB
    onError: (error) => console.error(error),
  };

  return (
    <LexicalComposer initialConfig={config}>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="outline-none" />}
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
    </LexicalComposer>
  );
}