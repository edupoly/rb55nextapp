// components/nodes/ImageNode.js
import { DecoratorNode } from 'lexical';

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

export class ImageNode extends DecoratorNode {
  __src;
  __altText;
  __width;
  __height;

  static getType() {
    return 'image';
  }

  static clone(node) {
    return new ImageNode(node.__src, node.__altText, node.__width, node.__height, node.__key);
  }

  constructor(src, altText, width, height, key) {
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