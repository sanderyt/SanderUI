import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts", // Entry point
  output: [
    {
      file: "dist/bundle.cjs.js", // CommonJS bundle
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js", // ES Module bundle
      format: "esm",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
    scss({
      output: "dist/bundle.css",
    }),
    postcss({
      extensions: [".scss", ".css"],
      use: [["sass", { includePaths: ["./src/styles"] }]],
      plugins: [require("tailwindcss"), require("autoprefixer")],
      extract: "dist/style.css",
      minimize: true,
    }),
  ],
};
