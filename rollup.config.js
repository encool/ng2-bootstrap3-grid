const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify');
const sourcemaps = require('rollup-plugin-sourcemaps');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

export default {
    // moduleName: camelCase(libName),
    moduleName: "ng2-bootstrap3-grid",
    sourceMap: true,
    // ATTENTION:
    // Add any dependency or peer dependency your library to `globals` and `external`.
    // This is required for UMD bundle users.
    globals: {
        // The key here is library name, and the value is the the name of the global variable name
        // the window object.
        // See https://github.com/rollup/rollup/wiki/JavaScript-API#globals for more.
        '@angular/core': 'ng.core'
    },
    external: [
        // List of dependencies
        // See https://github.com/rollup/rollup/wiki/JavaScript-API#external for more.
        '@angular/core'
    ],
    plugins: [
        commonjs({
            include: ['node_modules/rxjs/**',"out-tsc","grid"]
        }),
        sourcemaps(),
        // nodeResolve({ jsnext: true, module: true })
    ],
    format: 'umd',
}