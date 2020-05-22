import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: true,
      namedExports: true,
      use: ["sass"],
    }),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
