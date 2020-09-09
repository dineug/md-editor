import pkg from "./package.json";
import config from "./rollup.config.common";
import browsersync from "rollup-plugin-browsersync";
import html from "rollup-plugin-generate-html-template";

const { plugins, banner } = config();

export default {
  input: "src/ts/index.dev.ts",
  output: {
    name: "MDEditor",
    file: pkg.main,
    format: "umd",
    plugins: [
      html({
        template: "src/index.html",
        target: "dist/index.html",
      }),
      browsersync({
        server: "dist",
        open: false,
      }),
    ],
    banner,
  },
  plugins,
};
