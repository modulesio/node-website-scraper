import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
        input: 'index.js',
        plugins: [
          json(),
          resolve({
            // use "module" field for ES6 module if possible
            module: true, // Default: true

            // use "main" field or index.js, even if it's not an ES6 module
            // (needs to be converted from CommonJS to ES6
            // – see https://github.com/rollup/rollup-plugin-commonjs
            main: true,  // Default: true

            extensions: [ '.mjs', '.js', '.jsx', '.json' ],
          }),
          commonjs(),
          /* babel({
            // exclude: 'node_modules/**'
          }) */
        ],
        // sourceMap: true,
        output: [
                {
                        format: 'cjs',
                        name: 'THREE',
                        file: 'build.js',
                        indent: '\t'
                }
        ]
};
