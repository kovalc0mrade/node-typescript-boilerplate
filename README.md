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

[ts-badge]: https://img.shields.io/badge/TypeScript-3.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-12.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-37]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
[jest]: https://facebook.github.io/jest/
[tslint]: https://palantir.github.io/tslint/
[tslint-microsoft-contrib]: https://github.com/Microsoft/tslint-microsoft-contrib
[prettier]: https://prettier.io
