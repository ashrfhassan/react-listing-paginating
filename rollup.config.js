import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
import scss from 'rollup-plugin-scss';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      scss(),
      typescript({
        exclude: [
          // Exclude test files
          /\.test.((js|jsx|ts|tsx))$/,
          // Exclude story files
          /\.stories.((js|jsx|ts|tsx|mdx))$/,
        ],
        tsconfig: './tsconfig.json',
      }),
    ],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
