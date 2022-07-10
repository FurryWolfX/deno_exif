import { createRequire } from "https://deno.land/std@0.88.0/node/module.ts";
import { Buffer } from "https://deno.land/std@0.88.0/node/buffer.ts";

const require = createRequire(Deno.mainModule);
const Parser = require("./lib/parser.js");
const NodeBufferStream = require("./lib/bufferstream");

export interface IExifResult {
  startMarker: { openWithOffset: Function; offset: number };
  tags: Record<string, any>;
  imageSize: { height: number; width: number };
  thumbnailOffset: number;
  thumbnailLength: number;
  thumbnailType: number;
  app1Offset: number;
}

export interface IExif {
  parse(): IExifResult;
}

export function create(imgBuffer: Uint8Array) {
  const buffer = Buffer.from(imgBuffer);
  const parser: IExif = new Parser(
    new NodeBufferStream(buffer, 0, buffer.length, true),
  );
  return parser;
}
