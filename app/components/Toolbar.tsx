// components/Toolbar.js
"use client";


import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export default function Toolbar() {
  const [editor] = useLexicalComposerContext();

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
    </div>
  );
}