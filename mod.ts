import * as exif from "npm:exif-parser";
import { Buffer } from "node:buffer";

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

export function create(imgBuffer: Uint8Array): IExif {
  return exif.create(Buffer.from(imgBuffer));
}
