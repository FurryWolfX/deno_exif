import { create } from "./mod.ts";

const parser = create(Deno.readFileSync("./IMG_20210223_190038.jpg"));
const result = parser.parse();

console.log(result);
