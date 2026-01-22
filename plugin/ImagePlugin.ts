// components/plugins/ImagePlugin.js
"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_EDITOR, createCommand } from "lexical";
import { useEffect } from "react";
import { $createImageNode } from "../nodes/ImageNode";

export const INSERT_IMAGE_COMMAND = createCommand("INSERT_IMAGE_COMMAND");

export default function ImagePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.has(INSERT_IMAGE_COMMAND)) {
      return editor.registerCommand(
        INSERT_IMAGE_COMMAND,
        (payload) => {
          const { src, altText, width, height } = payload;
          editor.update(() => {
            const imageNode = $createImageNode(src, altText, width, height);
            editor.getRootElement().append(imageNode.__key); // Insert at the end for simplicity
          });
          return true;
        },
        COMMAND_PRIORITY_EDITOR,
      );
    }
  }, [editor]);

  return null;
}
