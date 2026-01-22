// components/plugins/ImagePlugin.js
"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_EDITOR, createCommand, $insertNodes } from "lexical";
import { useEffect } from "react";
import { $createImageNode } from "../nodes/ImageNode";

export const INSERT_IMAGE_COMMAND = createCommand("INSERT_IMAGE_COMMAND");

export default function ImagePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // registerCommand returns an unregister function
    const unregister = editor.registerCommand(
      INSERT_IMAGE_COMMAND,
      (payload) => {
        const { src, altText, width, height } = payload;
        editor.update(() => {
          const imageNode = $createImageNode(src, altText, width, height);
          // Correct way to insert nodes into the tree
          $insertNodes([imageNode]);
        });
        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    );

    // Return the cleanup function to prevent memory leaks/duplicate listeners
    return unregister;
  }, [editor]);

  return null;
}
