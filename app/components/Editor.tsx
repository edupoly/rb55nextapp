// components/Editor.js
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { ListPlugin } from "@lexical/react/LexicalListPlugin"; // Add this
import { HeadingNode, QuoteNode } from "@lexical/rich-text"; // Add this
import { ListNode, ListItemNode } from "@lexical/list"; // Add this
import Toolbar from './Toolbar';
import { ImageNode } from '@/nodes/ImageNode';
import ImagePlugin from '@/plugin/ImagePlugin';
// import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const theme = { 
    paragraph: "mb-2",
    heading: { h1: "text-3xl font-bold", h2: "text-xl font-bold" },
    list: { ul: "list-disc ml-5", ol: "list-decimal ml-5" },
    text: { bold: "font-bold", italic: "italic" }
};

export default function Editor({ onChange }) {
  const initialConfig = {
    namespace: 'MyEditor',
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode,ImageNode],
    theme,
    onError: (error) => console.error(error),
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar></Toolbar>
        <div className="p-4 bg-white relative">
            
        <RichTextPlugin
          contentEditable={<ContentEditable className="outline-none min-h-[200px]" />}
          placeholder={<div className="text-gray-400">Enter your content...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
          <HistoryPlugin />
          <ListPlugin />
          <ImagePlugin></ImagePlugin>
        <OnChangePlugin onChange={(editorState) => {
          const jsonString = JSON.stringify(editorState.toJSON());
          onChange(jsonString);
        }} />

        </div>
      </LexicalComposer>
    </div>
  );
}