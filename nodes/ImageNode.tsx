// components/nodes/ImageNode.js

import { DecoratorNode, NodeKey, SerializedLexicalNode, Spread } from 'lexical';

export type SerializedImageNode = Spread<
  {
    src: string;
    altText: string;
    width?: number;
    height?: number;
  },
  SerializedLexicalNode
>;

function ImageComponent({ src, altText, width, height }) {
  return (
    <img
      src={src}
      alt={altText}
      width={width}
      height={height}
      className="max-w-full h-auto rounded-lg my-4 mx-auto block"
    />
  );
}

export class ImageNode extends DecoratorNode<any> {
  __src;
  __altText;
  __width;
  __height;

  static getType() {
    return 'image';
  }

// 1. ADD THIS: This method tells Lexical how to recreate the node from JSON
  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { src, altText, width, height } = serializedNode;
    const node = $createImageNode(src, altText, width, height);
    return node;
  }

  // 2. ADD THIS: This method tells Lexical what data to save into the JSON string
  exportJSON(): SerializedImageNode {
    return {
      type: 'image',
      src: this.getSrc(),
      altText: this.getAltText(),
      width: this.__width,
      height: this.__height,
      version: 1,
    };
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(node.__src, node.__altText, node.__width, node.__height, node.__key);
  }

 constructor(src: string, altText: string, width?: number, height?: number, key?: NodeKey) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__width = width;
    this.__height = height;
  }

  createDOM() {
    return document.createElement('span');
  }

  updateDOM() {
    return false;
  }

  decorate() {
    return (
      <ImageComponent
        src={this.__src}
        altText={this.__altText}
        width={this.__width}
        height={this.__height}
      />
    );
  }

  getSrc() { return this.__src; }
  getAltText() { return this.__altText; }
}

export function $createImageNode(src, altText, width, height) {
  return new ImageNode(src, altText, width, height);
}