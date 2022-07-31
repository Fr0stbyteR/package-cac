const fs = require("fs");
const path = require("path");
const solDir = path.dirname(require.resolve("@shren/sol"));
const solDtsPath = path.join(solDir, "index.d.ts");
const solDts = fs.readFileSync(solDtsPath, "utf-8");
fs.writeFileSync(path.join(__dirname, "./dist/sol.d.ts.txt"), solDts);
