[![TypeScript version][ts-badge]][typescript-37]
[![Node.js version][nodejs-badge]][nodejs]

# node-typescript-boilerplate

Minimalistic [Node.js][nodejs] project in [TypeScript][typescript] boilerplate.

What's included:

- [TypeScript 3.7][typescript-37]
- [TSLint][tslint] with [Microsoft rules][tslint-microsoft-contrib]
- [Jest][jest] unit testing and code coverage
- Type definitions for Node.js and Jest,
- [Prettier][prettier] to enforce a consistent code style
- [NPM scripts for common operations](#available-scripts)
- .editorconfig for consistent file format.

## Available scripts

- `start` - transpile TypeScript to ES6 and runs it with nodemon for local development,
- `build` - transpile TypeScript to ES6 with production configuration into dist folder,
- `lint` - lint source files and tests,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests,
- `clean` - remove coverage data, Jest cache and transpiled files,

## TSlint.json

- [tslint-microsoft-contrib/recommended][tslint-microsoft-contrib] - a set of TSLint rules used on some Microsoft projects.
- [tslint-config-prettier][prettier-config] - disables all conflicting rules that may cause conflicts between [TSLint][tslint] and [Prettier][prettier-link]
- [tslint-plugin-prettier][prettier-plugin] - runs [Prettier][prettier-link] as a [TSLint][tslint] rule and reports differences as individual TSLint issues.
- `promise-function-async` - requires any function or method that returns a promise to be marked async
- `no-relative-imports` - imported module should not be loaded from a relative path
- `export-name` - the exported module or identifier name must match the file name
- `no-void-expression` - requires expressions of type void to appear in statement position
- `prettier` - consider prettier as code formatter

## TSConfig.json

[ts-badge]: https://img.shields.io/badge/TypeScript-3.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-12.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-37]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
[jest]: https://facebook.github.io/jest/
[tslint]: https://palantir.github.io/tslint/
[tslint-microsoft-contrib]: https://github.com/Microsoft/tslint-microsoft-contrib
[prettier]: https://prettier.io
[prettier-link]: https://github.com/prettier/prettier
[prettier-config]: https://github.com/prettier/tslint-config-prettier
[prettier-plugin]: https://github.com/prettier/tslint-plugin-prettier
