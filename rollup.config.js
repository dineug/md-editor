import pkg from "./package.json";
import config from "./rollup.config.common";
import { terser } from "rollup-plugin-terser";
import visualizer from "rollup-plugin-visualizer";
import strip from "@rollup/plugin-strip";

const { plugins, banner } = config();

export default {
  input: "src/index.ts",
  output: [
    {
      name: "MDEditor",
      file: pkg.main,
      format: "umd",
      banner,
    },
    {
      name: "MDEditor",
      file: pkg.browser,
      format: "umd",
      plugins: [
        terser(),
        visualizer({
          filename: "./dist/stats.html",
        }),
      ],
      banner,
    },
    {
      file: pkg.module,
      format: "es",
      banner,
    },
  ],
  plugins: [
    strip({
      debugger: true,
      include: "**/*.ts",
      functions: ["Logger.debug"],
    }),
    ...plugins,
  ],
};
