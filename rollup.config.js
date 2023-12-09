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
    postcss({
      extensions: [".scss"],
      use: {
        sass: {},
        scss: {
          includePaths: ["./node_modules"],
        },
      },
      plugins: [require("tailwindcss"), require("autoprefixer")],
      inject: true, // Injects the CSS into the JavaScript bundle
      extract: true, // Set to true if you want to extract CSS to a separate file
    }),
  ],
};
