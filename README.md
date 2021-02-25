move exif-parser to Deno.

```typescript
import { create } from "./mod.ts";

const parser = create(Deno.readFileSync("./test.jpeg"));
const result = parser.parse();

console.log(result);
```